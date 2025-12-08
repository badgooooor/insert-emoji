import { App, Editor, Modal, Plugin } from "obsidian";

export default class EmojiPlugin extends Plugin {
  async onload() {
    // Register event listener for editor context menu
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor, view) => {
        menu.addItem((item) => {
          item
            .setTitle("Insert emoji")
            .setIcon("smile")
            .onClick(() => {
              // Open emoji picker modal
              new EmojiPickerModal(this.app, editor).open();
            });
        });
      }),
    );
  }
}

class EmojiPickerModal extends Modal {
  editor: Editor;

  constructor(app: App, editor: Editor) {
    super(app);
    this.editor = editor;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.empty();
    contentEl.addClass("emoji-picker-modal");

    // Title
    const title = contentEl.createEl("h3", { text: "Select an emoji" });
    title.style.marginTop = "0";
    title.style.marginBottom = "15px";

    // Container for emojis
    const emojiContainer = contentEl.createDiv({ cls: "emoji-grid" });
    emojiContainer.style.display = "grid";
    emojiContainer.style.gridTemplateColumns = "repeat(8, 1fr)";
    emojiContainer.style.gap = "8px";
    emojiContainer.style.maxWidth = "400px";

    // Common emojis for proof-of-concept
    const emojis = [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "🤣",
      "😂",
      "🙂",
      "🙃",
      "😉",
      "😊",
      "😇",
      "🥰",
      "😍",
      "🤩",
      "😘",
      "😗",
      "😚",
      "😙",
      "😋",
      "😛",
      "😜",
      "🤪",
      "😝",
      "🤑",
      "🤗",
      "🤭",
      "🤫",
      "🤔",
      "🤐",
      "🤨",
      "😐",
      "😑",
      "😶",
      "😏",
      "😒",
      "🙄",
      "😬",
      "🤥",
      "😌",
      "😔",
      "😪",
      "🤤",
      "😴",
      "��",
      "🤒",
      "🤕",
      "🤢",
      "🤮",
      "🤧",
      "🥵",
      "🥶",
      "😶‍🌫️",
      "🥴",
      "😵",
      "👍",
      "👎",
      "👊",
      "✊",
      "🤛",
      "🤜",
      "🤞",
      "✌️",
      "🤟",
      "🤘",
      "👌",
      "🤏",
      "👈",
      "👉",
      "👆",
      "👇",
      "☝️",
      "✋",
      "🤚",
      "🖐️",
      "🖖",
      "👋",
      "🤙",
      "💪",
      "❤️",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🖤",
      "🤍",
      "💯",
      "✨",
      "⭐",
      "🌟",
      "💫",
      "🔥",
      "💥",
      "⚡",
    ];

    // Create emoji buttons
    emojis.forEach((emoji) => {
      const button = emojiContainer.createEl("button", { text: emoji });
      button.style.fontSize = "24px";
      button.style.padding = "8px";
      button.style.border = "1px solid var(--background-modifier-border)";
      button.style.borderRadius = "4px";
      button.style.background = "var(--background-primary)";
      button.style.cursor = "pointer";
      button.style.transition = "all 0.2s";

      button.addEventListener("mouseenter", () => {
        button.style.background = "var(--background-modifier-hover)";
        button.style.transform = "scale(1.1)";
      });

      button.addEventListener("mouseleave", () => {
        button.style.background = "var(--background-primary)";
        button.style.transform = "scale(1)";
      });

      button.addEventListener("click", () => {
        this.editor.replaceSelection(emoji);
        this.close();
      });
    });
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}
