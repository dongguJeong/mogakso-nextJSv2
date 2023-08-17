import axios from 'axios';

const cheerio = require('cheerio');
const iconv = require('iconv-lite')

const newsURL = 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=';

export default async function handler(req , res ) {

  let mode = req.query.mode;


  const covertURL = (mode) => {
    return newsURL + encodeURI(mode);
  }
  
  try {
    const response = await axios.get(covertURL(mode),{ responseType: 'arraybuffer', });
    if (response.status === 200) {
      let contentType = response.headers['content-type']

      let charset = contentType.includes('charset=')
      ? contentType.split('charset=')[1]
      : 'UTF-8'

      let resData = response.data;
      let data = iconv.decode(resData, charset);

      const $ = cheerio.load(data);
      const $newsList = $(".sh_item");

      const newsData = [];

      $newsList.each((index , element ) => {

        const title = $(element).find('.sh_text a').text();
        const press = $(element).find('.sh_text_press').text();
        const content = $(element).find('.sh_text_lede').text();
        const img_url = $(element).find('.sh_thumb_inner > a > img').attr("src");


        newsData.push({
          title : title,
          press : press,
          content : content,
          img_url : img_url,
       })
     });
     res.status(200).json(newsData);
   }
 } catch (error) {
   console.error('Error fetching the webpage:', error);
   res.status(500).json({ error: 'Internal server error' });
 }

}