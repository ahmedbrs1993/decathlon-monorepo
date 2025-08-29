import { Session } from "../types.ts";

const sessions: Record<string, Session> = {};

export function getSession(session_id: string | undefined, user_id: string): Session {
  if (session_id && sessions[session_id]) return sessions[session_id];
  const newSession: Session = { user_id, step: 0, selections: {} };
  if (session_id) sessions[session_id] = newSession;
  return newSession;
}

export function saveSession(session_id: string, session: Session) {
  sessions[session_id] = session;
}