const puppeteer = require('puppeteer');

puppeteer.launch()
  .then((browser) => {
    return browser.newPage()
      .then((page) => {
        return page.setViewport({ width: 1280, height: 800 })
          // 1. NCP Portal 페이지로 이동
          .then(() => page.goto('https:/www.ncloud.com', { waitUnitl: 'networkidle2' }))
          .then(() => page.screenshot({path: 'ncloud_main.png'}))
          // 2. NCP Compute User Guide 이동
          .then(() => page.goto('http://docs.ncloud.com/ko/compute/compute-1-1-v2.html', { waitUnitl: 'networkidle2' }))
          .then(() => page.screenshot({path: 'ncloud_compute.png'}))
          // 3. NCP User Guide 메인페이지 이동
          .then(() => page.goto('http://docs.ncloud.com/ko', { waitUnitl: 'networkidle2' }))
          // 4. 검색창에 "SENS" 검색어 입력
          .then(() => page.type('#input_search', 'SENS'))
          .then(() => page.click('.btn_search2'), { waitUnitl: 'networkidle2' })
          // 5. 검색어 실행 후 스크린샷 실행
          .then(() => page.screenshot({path: 'ncloud_sens.png'}))
      })
      .then(() => browser.close());
  });
