setInterval(() => {



let imgs = document.querySelectorAll('img');
imgs.forEach((a, i)=>{
    a.src = 'https://static.wikia.nocookie.net/koreagg/images/a/a6/Sans-wink.png/revision/latest/scale-to-width-down/192?cb=20170623083919&path-prefix=ko'
})

}, 500)


//페페 https://mblogthumb-phinf.pstatic.net/MjAyMzAzMjFfMTg2/MDAxNjc5MzY0NTY1Mzcy.lBR4XvrWRI0-aL56SrJyi1k6mT_p9CzeoiJ6XYs4ymkg.71DXDYyYyhLAZBUBlCZZ-ME8ypNzTelY8mnQhQSQI9Ag.JPEG.sssss747/image_632123684.jpg?type=w800
//샌즈 https://static.wikia.nocookie.net/koreagg/images/a/a6/Sans-wink.png/revision/latest/scale-to-width-down/192?cb=20170623083919&path-prefix=ko
//샌즈 해커 data:image/png;base64,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
// 나뭇가지 https://i.ytimg.com/vi/YVYlDqI3sDc/maxresdefault.jpg