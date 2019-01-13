// immediately invoked function expression, using parentheses to trick the syntax parser so that we don't have to write a function statement or give it a reference. Pass in window and jQuery as parameters.
(function(global, $) {
    
    // initialize and return an object. Use new keyword here in the library so that developers do not need to write new in app.js
    var Greetr = function(lan){
        return new Greetr.init(lan);
    }
    
    Greetr.init = function(lan){
        var self = this;
        self.lan = lan || 'en';
    }
    
    // hidden properties
    var languages = [
        'en',
        'es',
        'jap',
        'chn'
    ];
    
    // hidden properties
    var greetings = [
        'Hello',
        'Hola',
        'こんにちは',
        '你好'
    ];
    
    // functions on its prototype
    Greetr.prototype = {
        // takes the language and output its greeting accordingly.
        greeting: function(){
            let lan = this.lan || 'en';
            for(i = 0; i < languages.length; i++){
                if(lan === languages[i]) console.log(greetings[i]);
            }
            return this; // make this function chainnable
        },
        
        // validate whether the language passed in is a string
        validate: function(){
            if(typeof this.lan !== 'string') console.log('You need to enter a string');
            else console.log('This is a valid input.');
        },
        
        // validate whether we have jQuery and its selector
        validateJquery: function(selector){
            if(!$) throw 'jQuery not loaded';
            if(!selector) throw 'Selector needed';
        },
        
        // log all greetings
        logAll: function(){
            for(i = 0; i < greetings.length; i++){
                console.log(languages[i] + ': ' + greetings[i]);
            }
        },
        
        // add more languages into the library
        addLanguage: function(lan, greeting){
            if(typeof lan !== 'string') throw 'Language name must be a string.';
            if(typeof greeting !== 'string') throw 'Greeting must be a string.';
            
            languages.push(lan);
            greetings.push(greeting);
            
            return this; // make this function chainnable
        }
    };
    
    Greetr.init.prototype = Greetr.prototype; // making the library open to other files
    global.Greetr = global.G$ = Greetr; // add an alias to the library so it's easier to type the name
    
}(window, jQuery));