/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Scripture {
  id: string;
  reference: string;
  text: string;
  sourceLabel?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  badge?: string;
  sources: string[];
  fullScriptures?: { ref: string; text: string; }[];
}

export interface EnvironmentFactor {
  title: string;
  iconName: string;
  description: string;
  evidence: {
    ref: string;
    text: string;
  };
}

export interface Imperative {
  id: string;
  reference: string;
  command: string;
  verseQuote: string;
  category: "Speech & Tongue" | "Trials & Perseverance" | "Humility & Community" | "Social Justice & faith";
}
