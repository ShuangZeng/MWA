
(function(){
    'use strict'

    //using ES6 feature
    String.prototype.filter = function(filterarray){
        var result =this;
        filterarray.forEach(text => {
             result = result.replace(text, "***");
        });
        console.log(`Using ES6: ${result}`);
    }
    "This home is nice".filter(['home','nice']);

    //Using Promise
    String.prototype.filterusingPromise = function(filterarray){
              return new Promise((resolve, reject) => {
                var result =this;
                filterarray.forEach(text => {
                    result = result.replace(text, "***");
               });
               
            resolve(result);
            reject(new Error("Operation failed"));
        });
    }

    "This home is nice".filterusingPromise(['home','nice'])
    .then(data => console.log(`Using promise: ${data}`))
        .catch(err=> console.log(err))

    // //using async/await

    String.prototype.filterAsync =  async function filtertext(data){
        try{
            let result = await this.filterusingPromise(data)
            console.log(`Using async: ${result}`);
        }
        catch(error){
            console.log("error");
        }
    }
    "This home is nice".filterAsync(['home'])

    // using observable
    const {from} = rxjs;
    const{Observable, of} = rxjs;

    String.prototype.filterusingobservable = function (filterarray){
        var result = this;
        from(filterarray)
        .pipe(
            map(text => this.replace(text,"*"))
        )
        .subscribe(
            result =>console.log(`Using observable: ${result}`)
        )
     
    } 
})();
