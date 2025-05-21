describe('Basic user flow for Website', () => {
  // First, visit the lab 7 website
  beforeAll(async () => {
    await page.goto('https://cse110-sp25.github.io/CSE110-Shop/');
  });

  // Each it() call is a separate test
  // Here, we check to make sure that all 20 <product-item> elements have loaded
  it('Initial Home Page - Check for 20 product items', async () => {
    console.log('Checking for 20 product items...');

    // Query select all of the <product-item> elements and return the length of that array
    const numProducts = await page.$$eval('product-item', (prodItems) => {
      return prodItems.length;
    });

    // Expect there that array from earlier to be of length 20, meaning 20 <product-item> elements where found
    expect(numProducts).toBe(20);
  });

  // Check to make sure that all 20 <product-item> elements have data in them
  // We use .skip() here because this test has a TODO that has not been completed yet.
  // Make sure to remove the .skip after you finish the TODO. 
  it('Make sure <product-item> elements are populated', async () => {
    console.log('Checking to make sure <product-item> elements are populated...');

    // Start as true, if any don't have data, swap to false
    let allArePopulated = true;

    // Query select all of the <product-item> elements
    const prodItemsData = await page.$$eval('product-item', prodItems => {
      return prodItems.map(item => {
        // Grab all of the json data stored inside
        return data = item.data;
      });
    });

    console.log(`Checking product item 1/${prodItemsData.length}`);                                   //add more?

    // Make sure the title, price, and image are populated in the JSON
    firstValue = prodItemsData[0];
    if (firstValue.title.length == 0) { allArePopulated = false; }
    if (firstValue.price.length == 0) { allArePopulated = false; }
    if (firstValue.image.length == 0) { allArePopulated = false; }

    // Expect allArePopulated to still be true
    expect(allArePopulated).toBe(true);

    /**
    **** TODO - STEP 1 ****
    * Right now this function is only checking the first <product-item> it found, make it so that
      it checks every <product-item> it found
    * Remove the .skip from this it once you are finished writing this test.
    */
      secondValue = prodItemsData[1];
      if (secondValue.title.length == 0) { allArePopulated = false; }
      if (secondValue.price.length == 0) { allArePopulated = false; }
      if (secondValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      thirdValue = prodItemsData[2];
      if (thirdValue.title.length == 0) { allArePopulated = false; }
      if (thirdValue.price.length == 0) { allArePopulated = false; }
      if (thirdValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      fourValue = prodItemsData[3];
      if (fourValue.title.length == 0) { allArePopulated = false; }
      if (fourValue.price.length == 0) { allArePopulated = false; }
      if (fourValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      fiveValue = prodItemsData[4];
      if (fiveValue.title.length == 0) { allArePopulated = false; }
      if (fiveValue.price.length == 0) { allArePopulated = false; }
      if (fiveValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      sixValue = prodItemsData[5];
      if (sixValue.title.length == 0) { allArePopulated = false; }
      if (sixValue.price.length == 0) { allArePopulated = false; }
      if (sixValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      sevenValue = prodItemsData[6];
      if (sevenValue.title.length == 0) { allArePopulated = false; }
      if (sevenValue.price.length == 0) { allArePopulated = false; }
      if (sevenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      eightValue = prodItemsData[7];
      if (eightValue.title.length == 0) { allArePopulated = false; }
      if (eightValue.price.length == 0) { allArePopulated = false; }
      if (eightValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      nineValue = prodItemsData[8];
      if (nineValue.title.length == 0) { allArePopulated = false; }
      if (nineValue.price.length == 0) { allArePopulated = false; }
      if (nineValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      tenValue = prodItemsData[9];
      if (tenValue.title.length == 0) { allArePopulated = false; }
      if (tenValue.price.length == 0) { allArePopulated = false; }
      if (tenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      elevenValue = prodItemsData[10];
      if (elevenValue.title.length == 0) { allArePopulated = false; }
      if (elevenValue.price.length == 0) { allArePopulated = false; }
      if (elevenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      twelveValue = prodItemsData[11];
      if (twelveValue.title.length == 0) { allArePopulated = false; }
      if (twelveValue.price.length == 0) { allArePopulated = false; }
      if (twelveValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      thirteenValue = prodItemsData[12];
      if (thirteenValue.title.length == 0) { allArePopulated = false; }
      if (thirteenValue.price.length == 0) { allArePopulated = false; }
      if (thirteenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      fourteenValue = prodItemsData[13];
      if (fourteenValue.title.length == 0) { allArePopulated = false; }
      if (fourteenValue.price.length == 0) { allArePopulated = false; }
      if (fourteenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      fiveteenValue = prodItemsData[14];
      if (fiveteenValue.title.length == 0) { allArePopulated = false; }
      if (fiveteenValue.price.length == 0) { allArePopulated = false; }
      if (fiveteenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);
  
      sixteenValue = prodItemsData[15];
      if (sixteenValue.title.length == 0) { allArePopulated = false; }
      if (sixteenValue.price.length == 0) { allArePopulated = false; }
      if (sixteenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      seventeenValue = prodItemsData[16];
      if (seventeenValue.title.length == 0) { allArePopulated = false; }
      if (seventeenValue.price.length == 0) { allArePopulated = false; }
      if (seventeenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      eighteenValue = prodItemsData[17];
      if (eighteenValue.title.length == 0) { allArePopulated = false; }
      if (eighteenValue.price.length == 0) { allArePopulated = false; }
      if (eighteenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      nineteenValue = prodItemsData[18];
      if (nineteenValue.title.length == 0) { allArePopulated = false; }
      if (nineteenValue.price.length == 0) { allArePopulated = false; }
      if (nineteenValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

      twentyValue = prodItemsData[19];
      if (twentyValue.title.length == 0) { allArePopulated = false; }
      if (twentyValue.price.length == 0) { allArePopulated = false; }
      if (twentyValue.image.length == 0) { allArePopulated = false; }
      expect(allArePopulated).toBe(true);

  }, 10000);

  // Check to make sure that when you click "Add to Cart" on the first <product-item> that
  // the button swaps to "Remove from Cart"
  it('Clicking the "Add to Cart" button should change button text', async () => {
    console.log('Checking the "Add to Cart" button...');

    /**
     **** TODO - STEP 2 **** 
     * Query a <product-item> element using puppeteer ( checkout page.$() and page.$$() in the docs )
     * Grab the shadowRoot of that element (it's a property), then query a button from that shadowRoot.
     * Once you have the button, you can click it and check the innerText property of the button.
     * Once you have the innerText property, use innerText.jsonValue() to get the text value of it
     * Remember to remove the .skip from this it once you are finished writing this test.
     */

     // Query select all of the <product-item> elements
    const textclick = await page.$eval('product-item', prodItems => {
      const shadow1 = prodItems.shadowRoot.querySelector('button');
     // const but1 = shadow1.querySelector('button');
    //const text = shadow1.innerText.jsonValue;
   // expect(text).toBe('Add to Cart');
    shadow1.click();
    const text1 = shadow1.innerText; 
    shadow1.click();                                                             //why???? jsonValue not work?          
    return text1;
    });    
    expect(textclick).toBe("Remove from Cart");

  }, 2500);

  // Check to make sure that after clicking "Add to Cart" on every <product-item> that the Cart
  // number in the top right has been correctly updated
  it('Checking number of items in cart on screen', async () => {
    console.log('Checking number of items in cart on screen...');

    /**
     **** TODO - STEP 3 **** 
     * Query select all of the <product-item> elements, then for every single product element
       get the shadowRoot and query select the button inside, and click on it.
     * Check to see if the innerText of #cart-count is 20
     * Remember to remove the .skip from this it once you are finished writing this test.
     */

       //const cartNumber = await page.evaluate(() => { //evaluate helps run javascript in browser as a whole
      // const products = await page.$$('product-item'); //individually into browser
       // return products.length;
       
       const cartNumber = await page.evaluate(() => {
        const products = document.getElementsByTagName('product-item');
        for (let i= 0; i < products.length ; i++) {
          const but = products[i].shadowRoot.querySelector('button');
          but.click();
        }
       return document.getElementById("cart-count").innerText;
       });
      expect(cartNumber).toBe('20');

  }, 10000);

  // Check to make sure that after you reload the page it remembers all of the items in your cart
  it('Checking number of items in cart on screen after reload', async () => {
    console.log('Checking number of items in cart on screen after reload...');

    /**
     **** TODO - STEP 4 **** 
     * Reload the page, then select all of the <product-item> elements, and check every
       element to make sure that all of their buttons say "Remove from Cart".
     * Also check to make sure that #cart-count is still 20
     * Remember to remove the .skip from this it once you are finished writing this test.
     */
await page.reload();
const cartNumber = await page.$$eval('product-item', products => {
  let error = true; //no error
  for (let i= 0; i < products.length ; i++) {
    const but = products[i].shadowRoot.querySelector('button');
    if(but.innerText != 'Remove from Cart'){
       error = 'false-remove';
      return error;
    };
  }
 if (document.getElementById("cart-count").innerText != '20'){
  error = 'false-nonumber'
  return error;
 }
 return error;
 });
expect(cartNumber).toBe(true);

  }, 10000);

  // Check to make sure that the cart in localStorage is what you expect
  it('Checking the localStorage to make sure cart is correct', async () => {

    /**
     **** TODO - STEP 5 **** 
     * At this point the item 'cart' in localStorage should be 
       '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]', check to make sure it is
     * Remember to remove the .skip from this it once you are finished writing this test.
     */
       const localStorageData = await page.evaluate(() => {
        return localStorage.getItem('cart'); //can aklso use parse I believe to get the whole array
        //JSON.stringify(arr);
      });

      expect(localStorageData).toBe('[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]');

  });

  // Checking to make sure that if you remove all of the items from the cart that the cart
  // number in the top right of the screen is 0
  it('Checking number of items in cart on screen after removing from cart', async () => {
    console.log('Checking number of items in cart on screen...');

    /**
     **** TODO - STEP 6 **** 
     * Go through and click "Remove from Cart" on every single <product-item>, just like above.
     * Once you have, check to make sure that #cart-count is now 0
     * Remember to remove the .skip from this it once you are finished writing this test.
     */

  //    const textclick = await page.$eval('product-item', prodItems => {
  //   //const text = shadow1.innerText.jsonValue;
  //  // expect(text).toBe('Add to Cart');
  //   shadow1.click();
  //   //const text1 = shadow1.innerText; 
  //   //shadow1.click();                                                             //why???? jsonValue not work?          
  //   //return text1;

  const cartNumber = await page.$$eval('product-item', products => {
    //let error = true; //no error
    for (let i= 0; i < products.length ; i++) {
      const but = products[i].shadowRoot.querySelector('button');
      but.click();
    }
   return document.getElementById("cart-count").innerText;
   });
  expect(cartNumber).toBe('0');
  }, 10000);

  // Checking to make sure that it remembers us removing everything from the cart
  // after we refresh the page
  it('Checking number of items in cart on screen after reload', async () => {
    console.log('Checking number of items in cart on screen after reload...');

    /**
     **** TODO - STEP 7 **** 
     * Reload the page once more, then go through each <product-item> to make sure that it has remembered nothing
       is in the cart - do this by checking the text on the buttons so that they should say "Add to Cart".
     * Also check to make sure that #cart-count is still 0
     * Remember to remove the .skip from this it once you are finished writing this test.
     */
    await page.reload();
       const cartNumber = await page.$$eval('product-item', products => {
        let error = true; //no error
        for (let i= 0; i < products.length ; i++) {
          const but = products[i].shadowRoot.querySelector('button');
          if(but.innerText!="Add to Cart"){
            error = false;
            return error;
          }
        }
       if(document.getElementById("cart-count").innerText != '0'){
        error=false;
        return error;
       }
       return error;
       });
      expect(cartNumber).toBe(true);

  }, 25000);

  // Checking to make sure that localStorage for the cart is as we'd expect for the
  // cart being empty
  it('Checking the localStorage to make sure cart is correct', async () => {
    console.log('Checking the localStorage...');

    /**
     **** TODO - STEP 8 **** 
     * At this point he item 'cart' in localStorage should be '[]', check to make sure it is
     * Remember to remove the .skip from this it once you are finished writing this test.
     */
     const localStorageData = await page.evaluate(() => {
      return localStorage.getItem('cart'); //can aklso use parse I believe to get the whole array
      //JSON.stringify(arr);
    });

    expect(localStorageData).toBe('[]');
  });
});
