declare global {
	interface SupportAI {
		enableAutoReply(): void;
		// add other members here if needed
	}

	interface Window {
		supportAI: SupportAI;
	}
}

export {};