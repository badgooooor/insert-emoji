import { App, Editor, Modal } from "obsidian";
import { emojis } from "../constants/emojis";

export default class EmojiPickerModal extends Modal {
  editor: Editor;

  constructor(app: App, editor: Editor) {
    super(app);
    this.editor = editor;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.empty();
    contentEl.addClass("emoji-picker-modal");

    // Set modal width to match grid
    this.modalEl.style.width = "fit-content";

    // Scrollable wrapper for emojis
    const scrollWrapper = contentEl.createDiv({ cls: "emoji-scroll-wrapper" });
    scrollWrapper.style.maxHeight = "300px";
    scrollWrapper.style.overflowY = "auto";
    scrollWrapper.style.overflowX = "hidden";
    scrollWrapper.style.marginTop = "16px";

    // Container for emojis
    const emojiContainer = scrollWrapper.createDiv({ cls: "emoji-grid" });
    emojiContainer.style.display = "grid";
    emojiContainer.style.gridTemplateColumns = "repeat(8, 1fr)";
    emojiContainer.style.gap = "2px";
    emojiContainer.style.width = "fit-content";
    emojiContainer.style.overflowY = "scroll";

    emojis.forEach((emoji) => {
      const button = emojiContainer.createEl("button", { text: emoji });
      button.style.fontSize = "24px";
      button.style.padding = "4px";
      button.style.border = "0px";
      button.style.background = "var(--background-primary)";
      button.style.cursor = "pointer";
      button.style.width = "40px";
      button.style.height = "40px";
      button.style.display = "flex";
      button.style.alignItems = "center";
      button.style.justifyContent = "center";

      button.addEventListener("click", () => {
        this.editor.replaceSelection(emoji);
      });
    });
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}
