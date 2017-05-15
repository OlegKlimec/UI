
  var articleController = (function () { 
     var articles =  [
      { /*0*/
        id: '1',
        title: 'Прыгнули в Европу: юные белоруски о переезде, кебабах, «луках», польской молодежи и выходе за рамки',
        summary: 'Люблин входит в десятку самых удобных для студентов городов Европы, и пускай рейтинги обычно врут, этот город действительно создает впечатление юного и беззаботного. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: '',//+
        content: 'Люблин входит в десятку самых удобных для студентов городов Европы'
       },

       { /*1*/
      	id: '2',
        title: 'Египет решил почти в 2,5 раза увеличить стоимость въездных виз с 1 марта',
        summary: 'Египет решил почти в 2,5 раза увеличить стоимость въездных виз с 1 марта: в обнародованном решении МИД АРЕ указывается, что «стоимость въездных виз повышается с $25 до $60». Но потом резко передумал.',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Ivan',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'
       },

      { /*2*/
      	id: '3',
        title: 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        summary: 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Ivan',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'       
      },

         { /*3*/
        id: '4',
        title: 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        summary: 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Ivan',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'       
      },

         { /*4*/
        id: '5',
        title: 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        summary: 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Ivan',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'       
      },
     
         { /*5*/
        id: '6',
        title: 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        summary: 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Petya',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'      
         },

       { /*6*/
        id: '7',
        title: 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        summary: 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Ivan',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'       
      },

       { /*7*/
        id: '8',
        title: 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        summary: 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Ivan',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'       
      },

        { /*8*/
        id: '9',
        title: 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        summary: 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Ivan',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'       
      },

        { /*9*/
        id: '10',
        title: 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        summary: 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: ' Ivan',//+
        content: 'юблин входит в десятку самых удобных для студентов городов Европы'       
      }
    ];
   

   var globalSkip;
  var globalTop;

  var ourArticles;


/****************************************************************************************************/
       /*получить массив статей с сортировкой по дате создания и пагинацией*/
/****************************************************************************************************/ 
function getArticles(skip, top, filterConfig) {
    globalSkip = skip || 0;
    globalTop = top || 10;
    return filterArtilces(articles, filterConfig).slice(skip, skip + top);
  };

 function filterArtilces(articlesStorage, filterConfig) {
      if (filterConfig) {
      if (filterConfig.author) {
        if (typeof (filterConfig.author) === 'string') {
          var afterAuthorArticles = articlesStorage.filter(function (item) {
            return (item.author === filterConfig.author);
          });
          articlesStorage = afterAuthorArticles;
        }

        if ((filterConfig.fromDate) && (filterConfig.toDate)) {
          var afterDateArticles = articlesStorage.filter(function (item) {
            return ((filterConfig.fromDate <= item.createdAt) && (filterConfig.toDate > item.createdAt))
          });
          articlesStorage = afterDateArticles;
        }
        else {
          if (filterConfig.fromDate) {
            var afterDateArticles = articlesStorage.filter(function (item) {
              return (filterConfig.fromDate <= item.createdAt)
            });
            articlesStorage = afterDateArticles;
          }
          else {
            if (filterConfig.toDate) {
              var afterDateArticles = articlesStorage.filter(function (item) {
                return (filterConfig.toDate > item.createdAt)
              });
              articlesStorage = afterDateArticles;
            }
          }
        }
      }
    }
    articlesStorage.sort(function (a, b) {
      return b.createdAt - a.createdAt;
    });
    return articlesStorage;
  }


function getArticlesCount(filterConfig) {
        return filterArtilces(articles, filterConfig).length;
  }


  function sortArticles(masArticles, filterConfig) {
    ourArticles = masArticles;
    if (filterConfig) {
      if (filterConfig.author) {
        if (typeof (filterConfig.author) === 'string') {
          var afterAuthorArticles = masArticles.filter(function (item) {
            return (item.author === filterConfig.author);
          });
          ourArticles = afterAuthorArticles;
        }

        if ((filterConfig.fromDate) && (filterConfig.toDate)) {
          var afterDateArticles = ourArticles.filter(function (item) {
            return ((filterConfig.fromDate <= item.createdAt) && (filterConfig.toDate > item.createdAt))
          });
          ourArticles = afterDateArticles;
        }
        else {
          if (filterConfig.fromDate) {
            var afterDateArticles = ourArticles.filter(function (item) {
              return (filterConfig.fromDate <= item.createdAt)
            });
            ourArticles = afterDateArticles;
          }
          else {
            if (filterConfig.toDate) {
              var afterDateArticles = ourArticles.filter(function (item) {
                return (filterConfig.toDate > item.createdAt)
              });
              ourArticles = afterDateArticles;
            }
          }
        }
      }
    };
    ourArticles.sort(function (a, b) {
        return b.createdAt - a.createdAt;
    });
    var mas = ourArticles.slice(globalSkip, globalSkip + globalTop);
   		return mas;
    
  }



  function getArticle(id) {
    var myItem;
    articles.forEach(function (item, idElement, articles) {
      if (id == item.id) {
        myItem = item;
      }
    }
    );
    return myItem;
  };
/****************************************************************************************************/
                  /*удалить статью по id из массива*/
/****************************************************************************************************/
  function removeArticle(id) {
    articles.forEach(function (item, idElement, articles) {
      if (id == item.id) {
        articles.splice(idElement, 1);
      }
    });
  };
/****************************************************************************************************/
   /*проверить объект articles на валидность: присутствие всех обязательных полей в нужном формате.
  articlesService -enter - article   
/****************************************************************************************************/
  function validateArticle(item) {
    if ((typeof (item.id) === 'string') && (typeof (item.title) === 'string') && (item.title.length < 100) && (typeof (item.summary) === 'string') && (item.title.length < 200) && (item.createdAt !== undefined) && (typeof (item.author) === 'string') && (typeof (item.content) === 'string')) {
      return true;
    }
    else {
      return false;
    }
  };
/****************************************************************************************************/
                  /*изменить статью в массиве articles по id.*/
/****************************************************************************************************/
  function editArticle(id, idItem) {
    var myItem;
    articles.forEach(function (item, idElement, articles) {
      if (id == item.id) {
        myItem = item;
      }
    });
    if (validateArticle(myItem)) {
      if (typeof (idItem.title) === 'string') {
        myItem.title = idItem.title;
      }
      if (typeof (idItem.content) === 'string') {
        myItem.content = idItem.content;
      }
      if (typeof (idItem.summary) === 'string') {
        myItem.summary = idItem.summary;
      }
      // if (typeof (idItem.tags === Object)) {
      //   myItem.tags = idItem.tags;
      // }
      return true;
    }
    else {
      return false;
    }
  }



/****************************************************************************************************/
/*добавить новую статью в массив articles, вернуть true если статья добавлена успешно, иначе false.*/
/****************************************************************************************************/
function addArticle(item) {
    if (validateArticle(item)) {
      articles.push(item);

    return true;
    }
    return false;
};
  
  	return {
	    getArticles: getArticles,
	    sortArticles: sortArticles,
	    removeArticle: removeArticle,
	    addArticle: addArticle,
	    editArticle: editArticle,
	    validateArticle: validateArticle,
	    getArticlesCount: getArticlesCount,
	    articles: articles
	  }
}());