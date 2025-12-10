import { Plugin } from "obsidian";

import EmojiPickerModal from "./components/EmojiPickerModal";

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
