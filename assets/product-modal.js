/**  
  product-modal
 */

class ProductModelModal extends HTMLElement {
  constructor() {
    super();
    this.openModelModal();
  }

  getMediaId() {
    let mediaId = this.dataset.mediaId;
    return mediaId;
  }

  getModel() {
    return document.getElementById("productModelModal");
  }

  openModelModal() {
    const mediaId = this.getMediaId();
    //   console.log(mediaId);
    const modal = this.getModel();

    if (!mediaId) return;

    const openModelButton = this.querySelector(
      `button[id="productMoelModalOpenButton_${mediaId}"]`
    );
    openModelButton.addEventListener("click", (e) => {
      const modalBody = modal.querySelector("#body");

      modalBody.innerHTML = "";
      const template = this.querySelector("template");
      const templateClone = template.content.cloneNode(true);
      modalBody.appendChild(templateClone);
      const modelViewer = modal.querySelector("model-viewer");
      modelViewer.setAttribute("reveal", "auto");
      // modelViewer.className = "w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw]";
    });
  }
}

const productModal = customElements.define("product-modal", ProductModelModal);
