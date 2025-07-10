import { HtmlBasePlugin } from '@11ty/eleventy'

export default async function (eleventyConfig) {
    // Configure Eleventy
    eleventyConfig.addPlugin(HtmlBasePlugin)

    eleventyConfig.setInputDirectory('_site')
    eleventyConfig.setOutputDirectory('_dist')
    eleventyConfig.addWatchTarget('_site/**/*.css')
}
export const config = {
    pathPrefix: '/html-tricks/',
}
