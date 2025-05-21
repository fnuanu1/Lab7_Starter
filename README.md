Team Members: Fnu Anu and Thanh Hoang

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
A: Among the other options, I choose the option that says, "Within a Github action that runs whenever code is pushed" because this is automated to whenever I push the code and try merging it to the main branch so we can test for our changes to be validated before deployment. This allows earlier caught of bugs, as mentioned in today's class, based on how you set a priority test list in github actions or pipeline.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
A: No, I would not use end to end test to check if a function is returning the correct output because this can be tested easily through a jest test with expect `(__).toBe(__)` format.

3) What is the difference between navigation and snapshot mode?
The differences between navigation and snapshot mode is that navigation mode tests the webpage after it loads while snapshot mode simply tests the webpage in the state the website is in when that the snapshot mode tool is run for mostly accessibility issues found in that specific time only. Navigation mode also provided a lot of feedback on js, css and other minify or minimizations which snapshot mode did not really mentioned that. There is more detailed or general improvement feedback in navigation mode for general improvement in my opinion and more niche feedback in snapshot, as I observed in my experience.

1) Name three things we could do to improve the CSE 110 shop site based on the Lighthouse results.
2. Pre-portion the image sizes as when the images are bigger originally to being displayed smaller, this can increase the number of data and time a user uses to load the website on their device when we can size it already properly before using in our website.
3. The following html tags at the beginning were missing to describe the language this html code is in, which will be english, which is for accessibility purposes or other languages respectively. This can be problematic because this assumes that the "page is in the default language that the user chose when setting up the screen reader" as said by the tool. I Viewport tag seems to avoid 300ms delay to user requests and adapt quickly to various devices with narrow screens. 
So add the following accordingly:
```
    <html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
1. Additionally, non-composited animations are any animation that triggers one of the earlier steps in the rendering pipeline, requiring more work to be done than necessary which is what our navigation mode seems to detect on Add to Cart buttons all over the website for 20 various items. Hence, practicing proper prevention to avoid non-composited animations will allow us to reduce jankiness and decrease CLS, which means a low-number equals to more stable website experiences versus a high CLS number means a much more janky experience.




