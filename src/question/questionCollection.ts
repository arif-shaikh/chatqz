export interface IQuestion {
  Id: number;
  question: string;
  optionList: string[];
  answer: number
};

export class QuestionCollection {

    questionList: IQuestion[];

    getList(inCount: number): IQuestion[] {
      var uniqueArr = [];
      while (uniqueArr.length < inCount) {
        var rnumber = Math.floor(Math.random() * 100) + 1;
        if (uniqueArr.indexOf(rnumber) == -1) {
          uniqueArr.push(rnumber)
        }
      }

      let testQuestionList: IQuestion[] = []
      uniqueArr.forEach(eachIndex => {
        testQuestionList.push(this.questionList[eachIndex]);
      });
      return testQuestionList;
    }

    get (): IQuestion[] {
        this.questionList  = [
          {
            Id: 1,
            question: 'HTML stands for -',
            optionList: [
              'HighText Machine Language',
              'HyperText and links Markup Language',
              'HyperText Markup Language',
              'None of these'
            ],
            answer: 3
          },
          {
            Id: 2,
            question: 'The correct sequence of HTML tags for starting a webpage is -',
            optionList: [
              'Head, Title, HTML, body',
              'HTML, Body, Title, Head',
              'HTML, Title, Body, Head',
              'HTML, Head, Title, Body'
            ],
            answer: 4
          },
          {
            Id: 3,
            question: 'Which of the following HTML tag is the special formatting tag?',
            optionList: [ '<p>', '<b>', '<pre>', 'None of the above' ],
            answer: 3
          },
          {
            Id: 4,
            question: 'Which of the following is the container for <tr>, <th>, and <td>?',
            optionList: [ '<data>', '<table>', '<group>', 'All of the above' ],
            answer: 2
          },
          {
            Id: 5,
            question: 'How to insert a background image in HTML?',
            optionList: [
              '<body background = "img.png">',
              '<img background = "img.png">',
              '<bg-image = "img.png">',
              'None of the above'
            ],
            answer: 1
          },
          {
            Id: 6,
            question: 'What are the types of unordered or bulleted list in HTML?',
            optionList: [
              'disc, square, triangle',
              'polygon, triangle, circle',
              'disc, circle, square',
              'All of the above'
            ],
            answer: 3
          },
          {
            Id: 7,
            question: 'An HTML program is saved by using the ____ extension.',
            optionList: [ '.ht', '.html', '.hml', 'None of the above' ],
            answer: 2
          },
          {
            Id: 8,
            question: 'The tags in HTML are ____________',
            optionList: [
              'case-sensitive',
              'in upper case',
              'not case sensitive',
              'in lowercase'
            ],
            answer: 3
          },
          {
            Id: 9,
            question: 'Which of the following is the root tag of the HTML document?',
            optionList: [ '<body>', '<head>', '<title>', '<html>' ],
            answer: 4
          },
          {
            Id: 10,
            question: 'Which of the following HTML attribute is used to define inline styles ?',
            optionList: [ 'style', 'type', 'class', 'None of the above' ],
            answer: 1
          },
          {
            Id: 11,
            question: 'Which of the following tag is used to create a combo box (or drop-down box)?',
            optionList: [ '<list>', '<select>', '<input type = "dropdown">', '<ul>' ],
            answer: 2
          },
          {
            Id: 12,
            question: 'Which is the correct way to comment out something in HTML?',
            optionList: [
              'Using ## and #',
              'Using <!-- and -->',
              'Using </-- and -/->',
              'Using <!-- and -!>'
            ],
            answer: 2
          },
          {
            Id: 13,
            question: 'If we want define style for an unique element, then which css selector will we use?',
            optionList: [ 'Id', 'text', 'class', 'name' ],
            answer: 1
          },
          {
            Id: 14,
            question: 'Which attribute can be added to many HTML / XHTML elements to identify them as a member of a specific group?',
            optionList: [ 'Id', 'div', 'class', 'span' ],
            answer: 3
          },
          {
            Id: 15,
            question: 'How can we write comment along with CSS code ?',
            optionList: [
              '/* a comment */',
              '// a comment //',
              '/ a comment /',
              "<' a comment'>"
            ],
            answer: 1
          },
          {
            Id: 16,
            question: "Which css property you will use if you want to add some margin between a DIV's border and its inner text?",
            optionList: [ 'spacing', 'margin', 'padding', 'inner-margin' ],
            answer: 3
          },
          {
            Id: 17,
            question: 'Which CSS property is used to control the text size of an element?',
            optionList: [ 'font-style', 'text-size', 'font-size', 'text-style' ],
            answer: 3
          },
          {
            Id: 18,
            question: "How will you make all paragraph elements 'RED' in color ?",
            optionList: [
              'p.all {color: red;}',
              'p.all {color: #990000;}',
              'all.p {color: #998877;}',
              'p {color: red;}'
            ],
            answer: 4
          },
          {
            Id: 19,
            question: 'Which of the following selector matches a element based on its class attribute?',
            optionList: [
              'The Type Selector',
              'The Universal Selector',
              'The Descendant Selector',
              'The Class Selector'
            ],
            answer: 4
          },
          {
            Id: 20,
            question: 'Which of the following property is used to set the text direction?',
            optionList: [ 'color', 'direction', 'letter-spacing', 'word-spacing' ],
            answer: 2
          },
          {
            Id: 21,
            question: 'Which of the following selector selects the elements that are checked?',
            optionList: [ 'E ~ F', ':: after', ': checked', 'none of the mentioned' ],
            answer: 3
          },
          {
            Id: 22,
            question: 'What does CSS stand for?',
            optionList: [
              'Computer Style Sheets',
              'Cascading Style Sheets',
              'Colorful Style Sheets',
              'Creative Style Sheets'
            ],
            answer: 2
          },
          {
            Id: 23,
            question: 'What is the correct CSS syntax?',
            optionList: [
              '{body:color=black;}',
              'body{color:black;}',
              '{body;color:black}',
              'Body:color=black;'
            ],
            answer: 2
          },
          {
            Id: 24,
            question: 'How do you add a background color for all <h1> elements?',
            optionList: [
              'h1{background-color:#FFFFFF;}',
              'h1.all{background-color:#FFFFFF;}',
              'all.h1 {background-color:#FFFFFF;}',
              'h2 {background-color:#FFFFFF;}'
            ],
            answer: 1
          },
          {
            Id: 25,
            question: 'How do you make the text bold?',
            optionList: [ 'Style:Bold;', 'font:bold;', 'font-weight:bold;', 'style:bold;' ],
            answer: 3
          },
          {
            Id: 26,
            question: 'How do you make a list that lists its items with squares?',
            optionList: [
              'list-type:square;',
              'list-style-type:square;',
              'list:square;',
              'list-style:square;'
            ],
            answer: 2
          },
          {
            Id: 27,
            question: "How do you select an element with id 'demo'?",
            optionList: [ '#demo', '. demo', 'demo', '*demo' ],
            answer: 1
          },
          {
            Id: 28,
            question: "How do you select elements with class name 'test'?",
            optionList: [ '*test', '.test', 'Test', '#test' ],
            answer: 2
          },
          {
            Id: 29,
            question: 'How do you select all p elements inside a div element?',
            optionList: [ 'div p', 'div.p', 'div+p', 'div' ],
            answer: 1
          },
          {
            Id: 30,
            question: 'What is the default value of the position property?',
            optionList: [ 'absolute', 'fixed', 'static', 'relative' ],
            answer: 3
          },
          {
            Id: 31,
            question: 'Inside which HTML element do we put javascript?',
            optionList: [ '<scripting>', '<script>', '<javascript>', '<js>' ],
            answer: 2
          },
          {
            Id: 32,
            question: 'What is the correct javascript syntax to change the content of the paragraph HTML element ?\n' +
              '   <p id = “demo”>This is a demonstration</p>\n',
            optionList: [
              '   document.getElementByName(“p”).innerHTML = “Hello World!!”;\n',
              '   document.getElement(“p”).innerHTML = “Hello World!!”;\n',
              '   document.getElementById(“demo”).innerHTML = “Hello World!!”;\n',
              '   #demo.innerHTML = “Hello World!!”;'
            ],
            answer: 3
          },
          {
            Id: 33,
            question: 'How do you write “Hello World” in an alert box?',
            optionList: [
              'alertBox(“Hello World”);',
              'msg(“Hello World”);',
              'msgBox(“Hello World”);',
              'alert(“Hello World”);'
            ],
            answer: 4
          },
          {
            Id: 34,
            question: 'How do you create function Javascript?',
            optionList: [
              'myFunction()',
              'function = myFunction()',
              'function myFunction()',
              'function:myFunction()'
            ],
            answer: 3
          },
          {
            Id: 35,
            question: 'How to write an IF statement in Javascript?',
            optionList: [ 'if i=5', 'If i=5 then', 'If i==5 then', 'if(i==5)' ],
            answer: 4
          },
          {
            Id: 36,
            question: 'How to write an IF statement for executing some code if “I” is NOT equal to 5?',
            optionList: [ 'if(i!=5)', 'If (i <> 5)', 'If i <> 5', 'If i =! 5 then' ],
            answer: 1
          },
          {
            Id: 37,
            question: 'How does while loop start?',
            optionList: [
              'while(i<=20)',
              'while i =1 to 10',
              'while(i<=10;i++)',
              'while I<=10, i++'
            ],
            answer: 1
          },
          {
            Id: 38,
            question: 'How does FOR loop start?',
            optionList: [
              'for(i = 0; i <= 5; i++)',
              'For(i <=5; i++)',
              'For(I = 0; i <= 5)',
              'For i = 1 to 5'
            ],
            answer: 1
          },
          {
            Id: 39,
            question: 'What is the correct way of writing javascript array?',
            optionList: [
              'var colors = ["red", "green", "blue"]',
              'var colors = "red", "green", "blue"',
              'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
              'var colors = (1:"red", 2:"green", 3:"blue")'
            ],
            answer: 1
          },
          {
            Id: 40,
            question: 'How do you round the number 7.25, to the nearest integer?',
            optionList: [
              'Math.round(7.25)',
              'Math.rnd(7.25)',
              'rnd(7.25)',
              'round(7.25)'
            ],
            answer: 1
          },
          {
            Id: 41,
            question: 'How do you find the number with the highest value of x and y?',
            optionList: [ 'Math.max(x, y)', 'ceil(x, y)', 'top(x, y)', 'Math.ceil(x, y)' ],
            answer: 1
          },
          {
            Id: 42,
            question: 'Which event occurs when the user clicks on an HTML element?',
            optionList: [ 'onchange', 'onmouseover', 'onmouseclick', 'onclick' ],
            answer: 4
          },
          {
            Id: 43,
            question: 'Which operator is used to assign a value to a variable?',
            optionList: [ '-', '=', 'x', '*' ],
            answer: 2
          },
          {
            Id: 44,
            question: 'Choose the correct HTML element for the largest heading:',
            optionList: [ '<heading>', '<head>', '<h6>', '<h1>' ],
            answer: 4
          },
          {
            Id: 45,
            question: 'What is the correct HTML element for inserting a line break?',
            optionList: [ '<br>', '<break>', '<lb>', '<b>' ],
            answer: 1
          },
          {
            Id: 46,
            question: 'Choose the correct HTML element to define important text',
            optionList: [ '<i>', '<b>', '<important>', '<strong>' ],
            answer: 4
          },
          {
            Id: 47,
            question: 'Which character is used to indicate an end tag?',
            optionList: [ '^', '<', '/', '*' ],
            answer: 3
          },
          {
            Id: 48,
            question: 'Which of these elements are all <table> elements?',
            optionList: [
              '<table><tr><td>',
              '<table><tr><tt>',
              '<thead><body><tr>',
              '<table><head><tfoot>'
            ],
            answer: 1
          },
          {
            Id: 49,
            question: 'How can you make a numbered list?',
            optionList: [ '<ul>', '<dl>', '<list>', '<ol>' ],
            answer: 4
          },
          {
            Id: 50,
            question: 'How can you make a bulleted list?',
            optionList: [ '<dl>', '<list>', '<ul>', '<ol>' ],
            answer: 3
          },
          {
            Id: 51,
            question: 'What is the correct HTML for making a checkbox?',
            optionList: [
              '<check>',
              '<input type="checkbox">',
              '<checkbox>',
              '<input type="check">'
            ],
            answer: 2
          },
          {
            Id: 52,
            question: 'What is the correct HTML for making a text input field?',
            optionList: [
              '<textinput type="text">',
              '<input type="textfield">',
              '<textfield>',
              '<input type="text">'
            ],
            answer: 4
          },
          {
            Id: 53,
            question: 'What is the correct HTML for making a drop-down list?',
            optionList: [
              '<select>',
              '<input type="list">',
              '<input type="dropdown">',
              '<list>'
            ],
            answer: 1
          },
          {
            Id: 54,
            question: 'What is the correct HTML for inserting an image?',
            optionList: [
              '<img alt="MyImage">image.gif</img>',
              '<img src="image.gif" alt="MyImage">',
              '<img href="image.gif" alt="MyImage">',
              '<image src="image.gif" alt="MyImage">'
            ],
            answer: 2
          },
          {
            Id: 55,
            question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
            optionList: [ 'longdesc', 'alt', 'title', 'Src' ],
            answer: 2
          },
          {
            Id: 56,
            question: 'The HTML <canvas> element is used to:',
            optionList: [
              'create draggable elements',
              'display database records',
              'draw graphics',
              'manipulate data in MySQL'
            ],
            answer: 3
          },
          {
            Id: 57,
            question: 'In HTML, which attribute is used to specify that an input field must be filled out?',
            optionList: [ 'required', 'Placeholder', 'Validate', 'Formvalidate' ],
            answer: 1
          },
          {
            Id: 58,
            question: 'Which input type defines a slider control?',
            optionList: [ 'slider', 'range', 'search', 'controls' ],
            answer: 2
          },
          {
            Id: 59,
            question: 'Which HTML element is used to display a scalar measurement within a range?',
            optionList: [ '<measure>', '<range>', '<meter>', '<gauge>' ],
            answer: 3
          },
          {
            Id: 60,
            question: 'Which HTML element is used to specify a header for a document or section?',
            optionList: [ '<header>', '<head>', '<top>', '<section>' ],
            answer: 1
          },
          {
            Id: 61,
            question: 'What does CSS stand for?',
            optionList: [
              'Colorful Style Sheets',
              'Creative Style Sheets',
              'Cascading Style Sheets',
              'Computer Style Sheets'
            ],
            answer: 3
          },
          {
            Id: 62,
            question: 'Which HTML tag is used to define an internal style sheet?',
            optionList: [ '<script>', '<style>', '<css>', '<head>' ],
            answer: 2
          },
          {
            Id: 63,
            question: 'Which HTML attribute is used to define inline styles?',
            optionList: [ 'styles', 'class', 'font', 'style' ],
            answer: 4
          },
          {
            Id: 64,
            question: 'Which is the correct CSS syntax?',
            optionList: [
              'body:color=black;',
              '{body:color=black;}',
              'body {color: black;}',
              '{body;color:black;}'
            ],
            answer: 3
          },
          {
            Id: 65,
            question: 'How do you insert a comment in a CSS file?',
            optionList: [
              '// this is a comment',
              "' this is a comment",
              '/* this is a comment */',
              '// this is a comment //'
            ],
            answer: 3
          },
          {
            Id: 66,
            question: 'Which property is used to change the background color?',
            optionList: [ 'backgroundcolor', 'bgcolor', 'color', 'background-color' ],
            answer: 4
          },
          {
            Id: 68,
            question: 'Which CSS property controls the text size?',
            optionList: [
              'color',
              'text-color',
              'Fgcolor',
              'Txtcolor',
              'text-style',
              'text-size',
              'font-size',
              'font-style'
            ],
            answer: 3
          },
          {
            Id: 69,
            question: 'What is the correct CSS syntax for making all the <p> elements bold?',
            optionList: [
              'p {text-size:bold;}',
              '<p style="text-size:bold;">',
              '<p style="font-size:bold;">',
              'p {font-weight:bold;}'
            ],
            answer: 4
          },
          {
            Id: 70,
            question: 'How do you display hyperlinks without an underline?',
            optionList: [
              'a {decoration:no-underline;}',
              'a {underline:none;}',
              'a {text-decoration:no-underline;}',
              'a {text-decoration:none;}'
            ],
            answer: 4
          },
          {
            Id: 71,
            question: 'How do you make each word in a text start with a capital letter?',
            optionList: [
              'text-transform:capitalize',
              'text-style:capitalize',
              "You can't do that with CSS",
              'transform:capitalize'
            ],
            answer: 1
          },
          {
            Id: 72,
            question: 'Which property is used to change the font of an element?',
            optionList: [ 'font-style', 'font-weight', 'font-family', 'Font-size' ],
            answer: 3
          },
          {
            Id: 73,
            question: 'How do you make the text bold?',
            optionList: [ 'font:bold;', 'font-weight:bold;', 'style:bold;', 'Bold' ],
            answer: 2
          },
          {
            Id: 74,
            question: 'Which property is used to change the left margin of an element?',
            optionList: [ 'padding-left', 'margin-left', 'Indent', 'None' ],
            answer: 2
          },
          {
            Id: 75,
            question: 'How do you make a list that lists its items with squares?',
            optionList: [
              'list-type: square;',
              'list-style-type: square;',
              'list: square;',
              'list-style: square;'
            ],
            answer: 2
          },
          {
            Id: 76,
            question: "How do you select an element with id 'demo'?",
            optionList: [ '#demo', '*demo', '.demo', 'Demo' ],
            answer: 1
          },
          {
            Id: 77,
            question: "How do you select elements with class name 'test'?",
            optionList: [ '#test', '*test', 'Test', '.test' ],
            answer: 4
          },
          {
            Id: 78,
            question: 'How do you select all p elements inside a div element?',
            optionList: [ 'div + p', 'div p', 'div.p', 'div p+' ],
            answer: 2
          },
          {
            Id: 79,
            question: 'How do you display a border like this:\n' +
              '   The top border = 10 pixels\n' +
              '   The bottom border = 5 pixels\n' +
              '   The left border = 20 pixels\n' +
              '   The right border = 1pixel?\n' +
              '   ',
            optionList: [
              'border-width:10px 1px 5px 20px;',
              'border-width:10px 20px 5px 1px;',
              'border-width:10px 5px 20px 1px;',
              'border-width:5px 20px 10px 1px;'
            ],
            answer: 1
          },
          {
            Id: 80,
            question: 'What is the default value of the position property?',
            optionList: [ 'absolute', 'static', 'relative', 'fixed' ],
            answer: 2
          },
          {
            Id: 0,
            question: '\n   \n   \n   81 What is the correct HTML for adding a background color?',
            optionList: [
              '<background>yellow</background>',
              '<body style="background-color:yellow;">',
              '<body bg="yellow">',
              '<body background=”color:yellow”>'
            ],
            answer: 2
          },
          {
            Id: 82,
            question: 'Choose the correct HTML element to define important text?',
            optionList: [ '<important>', '<strong>', '<i>', '<b>' ],
            answer: 2
          },
          {
            Id: 83,
            question: 'What is the correct HTML for creating a hyperlink?',
            optionList: [
              '<a href=”http://www.abc.com”>ABC</a>',
              '<a url=”http://www.abc.com”>ABC</a>',
              '<a>http://www.abc.com</a>',
              '<a name=”http://www.abc.com”> ABC</a>'
            ],
            answer: 1
          },
          {
            Id: 84,
            question: 'How can you open a link in a new tab/browser window?',
            optionList: [
              '<a href=”url target=”_blank”>',
              '<a href=”url” new>',
              '<a href=”url” target=”new”>',
              '<a href=”url” blank>'
            ],
            answer: 1
          },
          {
            Id: 85,
            question: 'Inline elements are normally displayed without starting a new line.',
            optionList: [ 'False', 'True', 'None', 'All of the above' ],
            answer: 2
          },
          {
            Id: 86,
            question: 'How can you make a numbered list?',
            optionList: [ '<list>', '<ul>', '<ol>', '<dl>' ],
            answer: 3
          },
          {
            Id: 87,
            question: 'What is the correct HTML for making a checkbox?',
            optionList: [
              '<input type=”checkbox”>',
              '<input type=”check”>',
              '<check>',
              '<checkbox>'
            ],
            answer: 1
          },
          {
            Id: 88,
            question: 'What is the correct HTML for inserting an image?',
            optionList: [
              '< img href=”image.gif” alt=”abc”>',
              '< image src=”image.gif” alt=”abc”>',
              '< img alt=”abc”>image.gif</img>',
              '< img src=”image.gif” alt=”abc”>'
            ],
            answer: 4
          },
          {
            Id: 89,
            question: 'An <iframe> is used to display a web page within a web page.',
            optionList: [
              'False',
              'There is no such thing as an <iframe>',
              'True',
              '<iframe>'
            ],
            answer: 3
          },
          {
            Id: 90,
            question: 'HTML comments start with <!-- and end with -->',
            optionList: [ 'False', 'True', 'None of the above', 'All of the above' ],
            answer: 2
          },
          {
            Id: 91,
            question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
            optionList: [ 'alt', 'title', 'src', 'longdesc' ],
            answer: 1
          },
          {
            Id: 92,
            question: 'Which doctype is correct for HTML5?',
            optionList: [
              '<!DOCTYPE HTML5>',
              '<!DOCTYPE html>',
              '<!DOCTYPE HTML PUBLIC”HTTP://WWW.ABC.COM”>',
              '<!DOCTYPE html5>'
            ],
            answer: 2
          },
          {
            Id: 93,
            question: 'Which HTML element is used to specify a footer for a document or section?',
            optionList: [ '<bottom>', '<section>', '<footer>', '<align>' ],
            answer: 3
          },
          {
            Id: 94,
            question: 'The HTML global attribute, "contenteditable" is used to:',
            optionList: [
              'Return the position of the first found occurrence of content inside a string',
              'Specify whether the content of an element should be editable or not',
              'Update content from the server',
              'Specifies a context menu for an element. The menu appears when a user right clicks on the element'
            ],
            answer: 2
          },
          {
            Id: 95,
            question: 'In HTML, onblur and onfocus are:',
            optionList: [
              'Style attribute',
              'Event attribute',
              'HTML elements',
              'CSS elements'
            ],
            answer: 2
          },
          {
            Id: 96,
            question: 'Graphics defined by SVG(Scalable Vector Graphics) is in which format?',
            optionList: [ 'CSS', 'HTML', 'XML', 'JSON' ],
            answer: 3
          },
          {
            Id: 97,
            question: 'The HTML <canvas> element is used to:',
            optionList: [
              'Manipulate data in MySQL',
              'Create draggable elements',
              'Draw graphics',
              'Display database records'
            ],
            answer: 3
          },
          {
            Id: 98,
            question: 'Which HTML element is used to display a scalar measurement within a range?',
            optionList: [ '<gauge>', '<range>', '<measure>', '<meter>' ],
            answer: 4
          },
          {
            Id: 99,
            question: 'Which HTML element defines navigation links?',
            optionList: [ '<navigate>', '<nav>', '<navigation>', '<navigation=”abc”>' ],
            answer: 2
          },
          {
            Id: 100,
            question: 'In HTML, what does the <aside> element define?',
            optionList: [
              'The ASCII character-set; to send information between computers on the internet',
              'Content aside from the page content',
              'A navigation list to be shown at the left side of the page',
              'All'
            ],
            answer: 2
          },
          {
            Id: 101,
            question: 'Which HTML element is used to specify a header for a document or section?',
            optionList: [ '<header>', '<section>', '<head>', '<top>' ],
            answer: 1
          },
          {
            Id: 102,
            question: 'Choose the correct HTML tag for the smallest size heading?',
            optionList: [ '<heading>', '<h6>', '<h1>', '<head>' ],
            answer: 2
          },
          {
            Id: 103,
            question: 'What is the correct HTML for adding a background color?',
            optionList: [
              '<body color=”yellow”>',
              '<body bgcolor=”yellow”>',
              '<background>yellow</background>',
              '<body background=”yellow”>'
            ],
            answer: 2
          },
          {
            Id: 104,
            question: 'Which attribute is used to name an element uniquely?',
            optionList: [ 'class', 'id', 'dot', 'all of above' ],
            answer: 2
          },
          {
            Id: 105,
            question: 'Which of the following is not a pair tag?',
            optionList: [ '<p>', '< u >', '<i>', '<img>' ],
            answer: 4
          },
          {
            Id: 106,
            question: 'HTML documents are saved in',
            optionList: [
              'Special binary format',
              'Machine language codes',
              'ASCII text',
              'None of above'
            ],
            answer: 3
          },
          {
            Id: 107,
            question: 'HTML documents are saved with extension',
            optionList: [ 'html', 'htm', 'Both A & B', 'None of the above.' ],
            answer: 3
          },
          {
            Id: 108,
            question: 'In HTML document the tags',
            optionList: [
              'Should be written in upper case',
              'should be written in lower case',
              'should be written in propercase',
              'can be written in both uppercase or lowercase'
            ],
            answer: 4
          },
          {
            Id: 109,
            question: 'Which of the following is not a style tag?',
            optionList: [ '<b>', '<tt>', '<i>', 'All of above are style tags' ],
            answer: 4
          },
          {
            Id: 110,
            question: 'HTML supports',
            optionList: [
              'ordered lists',
              'unordered lists',
              'both type of lists',
              'does not support those types.'
            ],
            answer: 3
          },
          {
            Id: 111,
            question: 'Which of the following is not a valid alignment attribute?',
            optionList: [ 'Left', 'Right', 'Top', 'All of above' ],
            answer: 3
          },
          {
            Id: 112,
            question: 'Which attribute is used with img tag to display the text if image could not load in browser?',
            optionList: [ 'description', 'name', 'alt', 'id' ],
            answer: 3
          },
          {
            Id: 113,
            question: 'Which tag allows you to add a row in a table?',
            optionList: [
              '<td> and </td>',
              '<cr> and </cr>',
              '<th> and </th>',
              '<tr> and </tr>'
            ],
            answer: 4
          },
          {
            Id: 114,
            question: 'How can you make a bulleted list?',
            optionList: [ '<list>', '<nl>', '<ul>', '<ol>' ],
            answer: 3
          },
          {
            Id: 115,
            question: 'Which HTML tag would be used to display power in expression (A+B)2 ?',
            optionList: [ '<SUP>', '<SUB>', '<B>', '<P>' ],
            answer: 1
          },
          {
            Id: 116,
            question: 'CSS is the language we use to style an ___________ document.',
            optionList: [ 'PHP', 'HTML', 'SQL', '.Net' ],
            answer: 2
          },
          {
            Id: 117,
            question: 'External stylesheets are stored in CSS files',
            optionList: [ 'TRUE', 'FALSE', 'Can be true or false', 'Cannot say' ],
            answer: 1
          },
          {
            Id: 118,
            question: 'In CSS, styling elements can be done by?',
            optionList: [ 'id', 'class', 'tag', 'All of the above' ],
            answer: 4
          },
          {
            Id: 119,
            question: 'Which Is the Correct CSS Syntax?',
            optionList: [
              'Body:color=black',
              '{body;color:black}',
              '{body:color=black(body}',
              'Body {color: Black}'
            ],
            answer: 4
          },
          {
            Id: 120,
            question: '1 pt is equals to?',
            optionList: [
              '1 pt = 1/72 of 1 in',
              '1 pt = 1/96 of 1 in',
              '1 pt = 1/74 of 1 in',
              '1 pt = 1/95 of 1 in'
            ],
            answer: 1
          },
          {
            Id: 121,
            question: '1 Px is equals to?',
            optionList: [
              '1 px = 1/96th of 1 in',
              '1 px = 1/72th of 1 in',
              '1 px =96pt',
              '1 px = 72pt'
            ],
            answer: 1
          },
          {
            Id: 122,
            question: 'In css what does h1 can be called as',
            optionList: [ 'Selector', 'Attribute', 'Value', 'Tag' ],
            answer: 1
          },
          {
            Id: 123,
            question: 'In css what does “color:red” can be called as',
            optionList: [ 'Selector', 'Attribute', 'Declaration', 'Tag' ],
            answer: 3
          },
          {
            Id: 124,
            question: 'Which of the following property sets a variation of the specified or default font family?',
            optionList: [ 'Height', 'font-weight', 'default', 'font-variant' ],
            answer: 4
          },
          {
            Id: 125,
            question: 'Which of the following is the correct way to apply Styles?',
            optionList: [
              'inside an HTML element',
              'inside the section of an HTML page',
              'in an external CSS file',
              'all of the mentioned'
            ],
            answer: 4
          },
          {
            Id: 126,
            question: 'Which of the following selector matches all elements of a type?',
            optionList: [
              'The Type Selector',
              'The Universal Selector',
              'The Descendant Selector',
              'The Class Selector'
            ],
            answer: 1
          },
          {
            Id: 127,
            question: "Which css property you will use if you want to add some margin between a DIV's border and its inner text ?",
            optionList: [ 'Spacing', 'Margin', 'Padding', 'inner-margin' ],
            answer: 3
          },
          {
            Id: 128,
            question: 'How can we write comment along with CSS code?',
            optionList: [
              '/* a comment */',
              '// a comment //',
              '/ a comment /',
              "<' a comment'>"
            ],
            answer: 1
          },
          {
            Id: 129,
            question: 'Which of the following property is used to specify table borders in CSS?',
            optionList: [ 'Table', 'border', 'table:border', 'none of the mentioned' ],
            answer: 2
          },
          {
            Id: 130,
            question: 'The elements <DIV> and <SPAN> have the following characteristics',
            optionList: [
              'Element <DIV> inherits properties defined for <SPAN> in a stylesheet',
              'Elements <SPAN> and <DIV> define content to be inline or block-level',
              '<DIV> and <SPAN> are used as alternatives for the element <P>',
              '<DIV> is used inside element <P>.'
            ],
            answer: 2
          }
        ];
       
       return this.getList(30);
       
    }
}