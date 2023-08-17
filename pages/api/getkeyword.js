import axios from "axios";

const cheerio = require('cheerio');

export default async function handler(req, res) {
    let keyword = req?.query?.keyword;
    console.log(keyword);
    let api_url = 'https://search.naver.com/search.naver?where=news&sm=tab_jum&query=' + encodeURI(keyword);

    try {
        const response = await axios.get(api_url);
        const data = response.data;

        const $ = cheerio.load(data);
        const $newsList = $(".bx");

        const newsData = [];

        $newsList.each((index, element) => {
            const pressEL = $(element).find(" .press ").text().trim();
            const news_urlEL = $(element).find(".info_group a:nth-child(3)").attr("href");
            const titleEL = $(element).find(".news_tit").attr("title");
            const contentEL = $(element).find(".dsc_wrap a").text().trim();
           
            
            if(contentEL !== "")
            {
                newsData.push({
                    press: pressEL.split(" ")[0],
                    news_url: news_urlEL,
                    content: contentEL,
                    title: titleEL,
                });
            }

        });
        
        res.status(200).json(newsData);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}


