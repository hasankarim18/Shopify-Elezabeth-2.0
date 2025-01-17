### Elezabeth clene theme by Hasan

# Plugin uses

- [swiper.js -- used in template-product.liquid]()
- [Flickity -- used in template-product2.liquid](https://flickity.metafizzy.co/)
- [lightbox - by Lokesh Dhakar](https://lokeshdhakar.com/projects/lightbox2/#getting-started)
- [sweet alert](https://sweetalert2.github.io/)
- [aos](https://michalsnik.github.io/aos/)

#### [Gti Repo Link](https://github.com/hasankarim18/Shopify-Elezabeth-2.0)

#### [Live Link](https://elezabeth-dev-store.myshopify.com/) // password: 4

# how should you write script in shopify

```
document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    console.log("Document loaded");
});
```

- tailwind configaration was changed

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/*.liquid"],
  theme: {
    extend: {},
  },
  plugins: [],
};


```

to

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

# Remove a cart line item manually

# use js script like this

```
<script defer src="{{ "swiper-bundle.min.js" |  asset_url }}"></script>

// this will solve this problem
<script>
    document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    });
  });
</script>
```

```
 <a href="{{ routes.cart_change_url }}?line={{ forloop.index }}&quantity=0"">
      Remove Manual
  </a>
```

- only the content portion is changed other wise not working properly, it will purge all the file

[![Generic badge](https://img.shields.io/badge/course%20available%3F-yes-green.svg)](https://shields.io/)

This project is created and intended to be used for the [Shopify Theme Development – Online Store 2.0 + TailwindCSS course](https://weeklyhow.com/courses/)

[Get the course!](https://weeklyhow.com/) | [Lessons covered](#lessons-covered) |
[How to use](#how-to-use) | [Not a student?](#not-a-student)

## Lessons covered

| Status             | Lectures                     |
| ------------------ | ---------------------------- |
| :heavy_check_mark: | Installing Development Tools |
| :heavy_check_mark: | Navigational Bar             |
| :heavy_check_mark: | 404 Page                     |
| :heavy_check_mark: | Article Page                 |
| :heavy_check_mark: | Blog Page                    |
| :heavy_check_mark: | Cart Page                    |
| :heavy_check_mark: | Product Collection Page      |
| :heavy_check_mark: | Collections Page             |
| :heavy_check_mark: | Homepage (Index)             |
| :heavy_check_mark: | Pages (About & Contact)      |
| :heavy_check_mark: | Advanced Product Page        |
| :heavy_check_mark: | Search Page                  |
| :hourglass:        | More lessons coming          |

## How to use

To use this repository for making Shopify themes, use the following command of Shopify CLI.

```sh
shopify theme init [ NAME OF YOUR THEME ] --clone-url https://github.com/polidario/Elizabeth_Clean
```

If you don't have Shopify CLI installed to your computer, navigate to the [installation page of Shopify CLI](https://shopify.dev/themes/tools/cli/installation).

## Not a student

If you're not a student, you can still use this repository to start a new Shopify theme project. However, any issues that you will encounter throughout your development will not be supported as the instructor will only answer questions through the course's QnA page.
