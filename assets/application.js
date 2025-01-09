// Put your application javascript here
document.addEventListener("DOMContentLoaded", () => {
  // handle click event while changing variants
  let variantSelect = document.querySelectorAll(".variant_option");
  variantSelect.forEach((select) => {
    select.addEventListener("change", handleVariantChange);
  });

  //   function to handle variant changes
  function handleVariantChange() {
    var seletedValues = [];
    // loop through all select dropdown
    variantSelect.forEach((select) => {
      seletedValues.push(select.value);
    });
    // get the list of product variants
    var variants = window.productVariants;
    // get the objects values of the selected variant
    var selectedVariant = findSlectedVariant(variants, seletedValues);
  }
  // function to find the selected variants
  function findSlectedVariant(variants, seletedValues) {
    // convert the array into a comma - separated string
  }
});
