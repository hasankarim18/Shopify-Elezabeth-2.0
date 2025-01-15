document.addEventListener("DOMContentLoaded", () => {
  class CustomerAddress {
    constructor() {
      this.initCustomerAddress();
      this.customerAddressesSelector();
      this.initDeleteAddressButtons();
    }

    initDeleteAddressButtons() {
      const deleteButtons = document.querySelectorAll(
        "button[data-delete-address]"
      );
      if (deleteButtons.length < 1) return;

      deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          let url = button.dataset.url;
          // var confirmation = window.confirm("Do you really want to delete");
          // if (confirmation) {
          const form = document.querySelector(`form[action="${url}"]`);

          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
          });
          swalWithBootstrapButtons
            .fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes, delete it!",
              cancelButtonText: "No, cancel!",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                form.submit();
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire({
                  title: "Cancelled",
                  text: "Your imaginary file is safe :)",
                  icon: "error",
                });
              }
            });

          // sweet alert ends
        });
      });
    }

    initCustomerAddress() {
      const allAddressesSelector = document.querySelectorAll(
        "select[data-country-selector]"
      );
      if (allAddressesSelector.length < 1) return;
      //console.log(allAddressesSelector);
      allAddressesSelector.forEach((select) => {
        var selectedCountry = this.getSelectedCountry(select);
        if (!selectedCountry) return;
        var provinces = selectedCountry.dataset.provinces;
        var arrayOfProvince = JSON.parse(provinces);
        var provinceSelector = document.querySelector(
          `#address_province_${select.dataset.id}`
        );
        if (arrayOfProvince.length < 1) {
          provinceSelector.setAttribute("disabled", "disabled");
        } else {
          provinceSelector.removeAttribute("disabled");
        }
        provinceSelector.innerHTML = "";
        var options = "";
        for (var index = 0; index < arrayOfProvince.length; index++) {
          if (
            arrayOfProvince[index][0] === provinceSelector.getAttribute("value")
          ) {
            options += `<option value="${arrayOfProvince[index][0]}" selected>${arrayOfProvince[index][0]}</option>`;
          } else {
            options += `<option value="${arrayOfProvince[index][0]}">${arrayOfProvince[index][0]}</option>`;
          }
        }
        provinceSelector.innerHTML = options;
      });
    }
    getSelectedCountry(select) {
      var option, selectedOption;
      for (var index = 0; index < select.options.length; index++) {
        option = select.options[index];
        if (option.value === select.getAttribute("value")) {
          selectedOption = option;
          selectedOption.setAttribute("selected", "selected");
          break;
        }
      }
      return selectedOption;
    }

    customerAddressesSelector() {
      const addressesSelector = document.querySelectorAll(
        "select[data-country-selector]"
      );
      if (addressesSelector.length < 1) return;
      // #foreach
      addressesSelector.forEach((select) => {
        select.addEventListener("change", function (e) {
          var provinces = this.options[this.selectedIndex].dataset.provinces;
          var arrayOfProvince = JSON.parse(provinces);
          // capturing the select tag
          var provinceSelector = document.querySelector(
            `#address_province_${this.dataset.id}`
          );
          provinceSelector.innerHTML = "";
          var options2 = "<option> No province </option>";
          var options = "";
          if (arrayOfProvince.length < 1) {
            // everything works just below innerHtml not working
            provinceSelector.innerHTML = options2;
            provinceSelector.setAttribute("disabled", "disabled");
          } else {
            provinceSelector.removeAttribute("disabled");

            for (var index = 0; index < arrayOfProvince.length; index++) {
              options += `<option value="${arrayOfProvince[index][0]}">${arrayOfProvince[index][0]}</option>`;
            }
            //  console.log(provinceSelector);
            provinceSelector.innerHTML = options;
          }
          //  provinceSelector.innerHTML = "";
        });
      });
    }
  }
  const customerAddress = new CustomerAddress();

  //  address delete fetch request
  class DeleteAddress {
    constructor() {
      this.initDeleteAddress();
    }

    initDeleteAddress() {
      const deleteButtons = document.querySelectorAll(
        "button[data-delete-address]"
      );
    }
  }

  const deleteAddress = new DeleteAddress();
});

/*
<button 
  class="btn btn-outline btn-error hover:btn-error delete-address-btn" 
  data-address-id="{{ address.id }}" 
  type="button">
  Delete
</button>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-address-btn");

    deleteButtons.forEach(button => {
      button.addEventListener("click", async (event) => {
        const addressId = button.getAttribute("data-address-id");
        const endpoint = `/account/addresses/${addressId}`;

        const confirmation = confirm("Are you sure you want to delete this address?");
        if (!confirmation) return;

        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "_method=delete" // Shopify requires this for DELETE emulation
          });

          if (response.ok) {
            alert("Address deleted successfully.");
            // Optionally remove the address from the DOM or refresh the page
            button.closest(".address-item").remove(); // Adjust selector as needed
          } else {
            const errorText = await response.text();
            console.error("Failed to delete address:", errorText);
            alert("Failed to delete the address. Please try again.");
          }
        } catch (error) {
          console.error("Error occurred while deleting the address:", error);
          alert("An unexpected error occurred. Please try again.");
        }
      });
    });
  });
</script>


*/
