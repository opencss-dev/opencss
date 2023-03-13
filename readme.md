# openCSS
## Introduction
At OpenCSS, we are dedicated to providing developers with top-quality resources for creating exceptional websites and applications. Our focus is on delivering reliable and efficient solutions that streamline your workflow and make your development process faster and more productive.

OpenCSS is a simple framework for building awesome web projects.
Note that OpenCSS is based on SASS to be extendable, flex and customizer.

## Usage
To use openCSS, first import it into your project. Run the following command:
- npm: _`npm i opencss`_

Or fork it from GitHub
- github: _`git clone  https://github.com/bebagodfried/opencss.git`_

## Quick start with CDN
- css:
    ```<link href="https://cdn.jsdelivr.net/npm/opencss@1.1.0/dist/open.min.css" rel="stylesheet" />```

- js:
    ```<script src="https://cdn.jsdelivr.net/npm/opencss@1.1.0/dist/open.min.js" ></script>```

## Reporting Issues
Issues for opencss should be reported to GitHub issue tracker.

## Documentation
OpenCSS use utility-classes to deal with your elements deign.

### eg:
#### Colors
- bc-_color_ : brands-color
- bg-_color_ : background-color
- fg-_color_ : forground-color

#### Text
- text-[right | center | left | top | middle | bottom] : text-alignment
- text-_color_ : text-color

#### Spacer
- g-[1-6]: gutter

- m-[1-6]: margin
--mt-[1-6] margin-top
--mt-[1-6] margin-right
--mt-[1-6] margin-bottom
--mt-[1-6] margin-left

- p-[1-6]: padding
--pt-[1-6] padding-top
--pt-[1-6] padding-right
--pt-[1-6] padding-bottom
--pt-[1-6] padding-left

...