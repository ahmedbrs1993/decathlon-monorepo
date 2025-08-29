import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { maillots, customizations, plots } from "../data.ts";
import { getSession, saveSession } from "../services/session.ts";
import { createResponse } from "../utils/response.ts";
import { MESSAGES } from "../constants/messages.ts";

const router = Router();

function addToDetails(details: string[], name: string, price: number): number {
  details.push(`${name} (${price}€)`);
  return price;
}

router.post("/", (req, res) => {
  const { user_id, message, session_id } = req.body;
  const session = getSession(session_id, user_id);
  const response = createResponse(user_id, session_id || uuidv4());

  switch (session.step) {
    case 0:
      if (/t-shirt|foot/i.test(message)) {
        response.answer = MESSAGES.maillotList;
        response.products = maillots;
        session.step = 1;
      } else {
        response.answer = MESSAGES.greetingUnknown;
      }
      break;

    case 1: // Sélection maillot
      const selected = maillots.find((m) => m.id === message);
      if (selected) {
        session.selections.maillot = selected;
        response.answer = MESSAGES.customizeQuestion;
        session.step = 2;
      } else {
        response.answer = MESSAGES.invalidMaillot;
        response.products = maillots;
      }
      break;

    case 2: // Customization
      const selectedCustomization = customizations.find(
        (c) => c.id === message
      );
      if (selectedCustomization) {
        session.selections.customizations = [selectedCustomization];
        response.answer = MESSAGES.logoQuestion;
        session.step = 3;
      } else if (/no/i.test(message)) {
        response.answer = MESSAGES.logoQuestion;
        session.step = 3;
      } else {
        response.answer = MESSAGES.invalidCustomization;
        response.customizations = customizations;
      }
      break;

    case 3: // Logo
      if (/yes/i.test(message)) {
        response.answer = MESSAGES.uploadLogo;
        response.show_upload_placeholder = true;
        session.selections.logo = false;
      } else if (/no/i.test(message)) {
        response.answer = MESSAGES.noLogo;
        session.step = 4;
      } else if (message === "logo_uploaded") {
        response.answer = MESSAGES.logoReceived;
        session.selections.logo = true;
        session.step = 4;
      } else {
        response.answer = MESSAGES.noLogo;
        session.step = 4;
      }
      break;

    case 4: // Plots
      if (/yes/i.test(message)) {
        response.answer = MESSAGES.plotsList;
        response.products = plots;
      } else if (/no/i.test(message)) {
        response.answer = MESSAGES.noPlots;
        response.products = [];
        session.step = 5;
      } else {
        const selectedPlot = plots.find((p) => p.id === message);
        if (selectedPlot) {
          session.selections.plots = [selectedPlot];
          response.answer = MESSAGES.finalizing;
          session.step = 5;
        } else {
          response.answer = MESSAGES.invalidPlot;
          response.products = plots;
          session.step = 5;
        }
      }
      break;

    case 5:
      let total = 0;
      let details: string[] = [];

      if (session.selections.maillot) {
        total += addToDetails(
          details,
          `T-Shirt: ${session.selections.maillot.name}`,
          session.selections.maillot.price
        );
      }
      if (session.selections.customizations?.length) {
        const c = session.selections.customizations[0];
        total += addToDetails(details, `Customization: ${c.name}`, c.price);
      }
      if (session.selections.logo) {
        total += addToDetails(details, "Logo of the club", 30);
      }
      if (session.selections.plots?.length) {
        const p = session.selections.plots[0];
        total += addToDetails(details, `Cones: ${p.name}`, p.price);
      }

      response.answer = MESSAGES.orderSummary(details.join("\n- "), total);
      session.step = 6;
      break;
  }

  saveSession(response.session_id, session);
  res.json(response);
});

export default router;
