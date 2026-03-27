import e, { domReady, eDelegate } from "./eye.js";

domReady(() => {

    eDelegate('dblclick', '#done', () => {
        console.log('done')
    })

    const list = ['yousef','ahmed','khaled','fathi']
    e('#search').on('input', e.debounce(function(ev) {
        const string = e(ev.target).val()
        if(list.includes(string)){
            e('#result').text('found').css('color','green')
        } else {
            e('#result').text('not found').css('color','red')
        }
    }))
})