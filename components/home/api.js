const homeApi = client => {
    return {
        getHomePage: async () => {
            const {item} = await client
                .item('untitled_content_item')
                .toPromise();

            return mapHomePage(item);
        },
    };
};

const mapHomePage = contentItem => {
  return {
    hero: mapHomeHero(contentItem),
  };
};


const mapHomeHero = contentItem => {
  return {
    headline: contentItem.hero__title.value,
    summary: contentItem.hero__text.value,
    image: contentItem.hero__image?.value?.[0],
  };
};

export default homeApi;