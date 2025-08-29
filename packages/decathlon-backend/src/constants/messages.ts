export const MESSAGES = {
  greetingUnknown: "I don't understand, can you clarify?",
  maillotList: "Here is a list of red jerseys. Which one would you like?",
  invalidMaillot: "Please select a valid jersey.",
  customizeQuestion: "Do you want to customize this jersey?",
  invalidCustomization: "Please select a customization option.",
  logoQuestion: "Do you want to add your club's logo?",
  uploadLogo: "Please upload your club's logo.",
  logoReceived: "Logo received. Do you want to add some cones?",
  noLogo: "No logo. Do you want to add some cones?",
  plotsList: "Here is a list of available cones:",
  noPlots: "No cones. We will finalize your order.",
  invalidPlot: "Please select a cone.",
  finalizing: "We will finalize your order.",
  orderSummary: (details: string, total: number) =>
    `Thank you for your order!\n\nDetails:\n- ${details}\n\nTotal: ${total.toFixed(
      2
    )} €.\nThe invoice will be sent by email.`,
};
