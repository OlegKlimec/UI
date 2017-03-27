
/****************************************************************************************************/
                  /*добавить новость в список DOM*/
/****************************************************************************************************/
var articlesService = (function () {
  var articles = [
      { /*0*/
        'id': '1',
        'title': 'Прыгнули в Европу: юные белоруски о переезде, кебабах, «луках», польской молодежи и выходе за рамки',
        'summary': 'Люблин входит в десятку самых удобных для студентов городов Европы, и пускай рейтинги обычно врут, этот город действительно создает впечатление юного и беззаботного. ',
        'createdAt': new Date('2012-04-04T24:00:00'),//+
        'author': 'Автор: Петя',//+
        'content': 'Люблин входит в десятку самых удобных для студентов городов Европы'
       },

       { /*1*/
      	'id': '2',
        'title': 'Египет решил почти в 2,5 раза увеличить стоимость въездных виз с 1 марта',
        'summary': 'Египет решил почти в 2,5 раза увеличить стоимость въездных виз с 1 марта: в обнародованном решении МИД АРЕ указывается, что «стоимость въездных виз повышается с $25 до $60». Но потом резко передумал.',
        'createdAt': new Date('2011-04-04T24:00:00'),//+
        'author': 'Автор: Петя',//+
        'content': 'Петя'
       },

      { /*2*/
      	'id': '3',
        'title': 'Зима, уходи! Фоторепортаж с задорных масленичных гуляний под Минском',
        'summary': 'Сегодня будто бы сама природа определялась с порой года. Светило яркое весеннее солнышко, валил снег — в общем, отличная погода для того, чтобы устроить проводы зимы. ',
        'createdAt': new Date('2010-04-04T24:00:00'),//+
        'author': 'Автор: Петя',//+
        'content': ''       }
     


    ];
   

/****************************************************************************************************/
                 /*получить статью из массива articles с определенным id.*/
/****************************************************************************************************/

	function getArticles(skip, top, filterConfig) {
		var sortArticles = articles.sort(function(a, b) {
		    return b.createdAt - a.createdAt;
		});

		    return sortArticles.slice(skip, top);
	}


/****************************************************************************************************/
   /*проверить объект articles на валидность: присутствие всех обязательных полей в нужном формате.
  articlesService -enter - article   
/****************************************************************************************************/


	function validateArticle (article) {
	        if 
	        	(article.id.length==0 || article.title.length==0 || article.summary.length==0 ||

	        	article.createdAt.length==0 || article.author.length==0  || article.content.length==0 

	          ) 
	        {
	          return true;
	        }
	}
	  

/****************************************************************************************************/
/*добавить новую статью в массив articles, вернуть true если статья добавлена успешно, иначе false.*/
/****************************************************************************************************/
	function addArticle (article){
		articles.push ([{
		    
		    id: '4',
		    title: 'Предприниматели выбрали лучший регион для ведения бизнеса.',
		    summary: 'Исследования «Лучший регион Беларуси для ведения бизнеса индивидуальными предпринимателями» РОО «Перспектива» проводит с 2009 года, собирая статистику и проводя анкетирование представителей малого бизнеса. ',
		    createdAt: new Date(''),
		    author: 'Автор: Петя',
		    content: 'hhhh'

		}]);

		var add = articles[key];
			for (var key in add) 
			{
		  
				if (add[key].length==0)
				   	{
				    //  console.log  ("Заполните:" +  key + ' ' + "в массиве articles id:" + ' ' + addArticle.id);
				       {
				          return false;
				        }
				    }

				else 
				    {
				       {
				          return true;
				        }

				    }
			}
	}


/****************************************************************************************************/
                  /*удалить статью по id из массива*/
/****************************************************************************************************/
	function removeArticle(id) {
		var remove = articles.splice(function(a, b) {
	    
	    return b.id - a.id;

	  });
		
	removeArticle(id)
	 // return remove.slice(skip, top);
	}


/****************************************************************************************************/
                  /*изменить статью в массиве articles по id.*/
/****************************************************************************************************/

	function editArticle(id, article){
	editArticle('1', { title: 'newTitle', content: 'newContent' })

	}

  
/****************************************************************************************************/
       
/****************************************************************************************************/ 
	function getArticles(skip, top, filterConfig) {
		return articles;
	}

	function addArticle(article) {
		articles.push(article);
	}

	function removeArticle(id){
		articles.splice(id);
	}

	return {
		getArticles: getArticles,
		addArticle: addArticle,
		removeArticle: removeArticle,
	};

							/*----------------------------------*/
                  						/*5 задание*/
							/*----------------------------------*/

/****************************************************************************************************/
                 			 /*добавить новость в список DOM*/
/****************************************************************************************************/ 

var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        /* DOM Загрузился.
           Можно найти в нем нужные элементы и сохранить в переменные */
        ARTICLE_TEMPLATE = document.querySelector('.blok');
        ARTICLE_LIST_NODE = document.querySelector('.article-list');
    }

	function insertArticlesInDOM(articles) {
        /* для массива объектов статей получим соотвествующие HTML элементы */
        var articlesNodes = renderArticles(articles);
        /* вставим HTML элементы в '.article-list' элемент в DOM. */
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

/****************************************************************************************************/
                  /*Удаление узлов: removeChild DOM*/
/****************************************************************************************************/ 
 	function removeArticlesFromDom () {
        ARTICLE_LIST_NODE.innerHTML = '';
    }


    function renderArticles(articles) {
        /* каждый объект article из массива преобразуем в HTML элемент */
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }


    function renderArticle(article) {
        /*
         Используем template из DOM, заполним его данными конкретной статьи - article.
       
        */
        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);

        /*
         Склонируем полученный контент из template и вернем как результат
        */
        return template.content.querySelector('.article-list-item').cloneNode(true);
    }

    /* Date -> 16/05/2015 09:50 */
    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());

/*
    Функция startApp вызовется, когда браузер полностью загрузит и распарсит исходный HTML (index.html)
    DOMContentLoaded – означает, что все DOM-элементы разметки уже созданы,
    можно их искать, вешать обработчики, создавать интерфейс, но при этом, возможно,
    ещё не догрузились какие-то картинки или стили.
*/
document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
     /* DOM Загрузился.
       Можно найти в нем нужные элементы и сохранить в переменные */
    articleRenderer.init();
    /* Нарисуем статьи из массива GLOBAL_ARTICLES в DOM */
   renderArticles();
}

/* Глобальная Функция для проверки. Свяжет модель и отображения */
function renderArticles(skip, top) {
    // 1. Удалим статьи из HTML
    articleRenderer.removeArticlesFromDom();

    // 2. Достанем статьи из модели
    var articles = articleModel.getArticles(skip, top);

    // 3. Отобразим статьи
    articleRenderer.insertArticlesInDOM(articles);
}



  

})();















/*var div = document.createElement('div');
div.className = "blok";
div.innerHTML = "<p>Люблин входит в десятку самых удобных для студентов городов Европы, и пускай рейтинги обычно врут, этот город действительно создает впечатление юного и беззаботного. Onliner.by закрывает цикл материалов о Люблинщине беседой с белорусками, уехавшими учиться в местный вуз и считающими, что мир должен быть большим и открытым.</p>";
function createAlertDomNode () {
  var div = document.createElement('div');
  div.classList.add('blok');
  div.innerHTML = '<p>Люблин входит в десятку самых удобных для студентов городов Европы, и пускай рейтинги обычно врут, этот город действительно создает впечатление юного и беззаботного. Onliner.by закрывает цикл материалов о Люблинщине беседой с белорусками, уехавшими учиться в местный вуз и считающими, что мир должен быть большим и открытым.</p>'
  return div;
}*/

/*var blok = createAlertDomNode();
document.body.appendChild(blok);

var minblok  = createAlertDomNode();
minblok.classList.add('min-blok ');
document.blokody.appendChild(minblok );*/


/*setTimeout(function() {
    document.body.removeChild(minblok);
}, 1000);



}*/