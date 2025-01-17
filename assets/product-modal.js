/**  
  product-modal
 */

class ProductModelModal extends HTMLElement {
  constructor() {
    super();
    this.openModelModal();
  }

  getMediaId() {}

  getModel() {}

  openModelModal() {
    const mediaId = this.getMediaId();
    const modal = this.getModel();
  }
}

const productModal = customElements.define("product-modal", ProductModelModal);
