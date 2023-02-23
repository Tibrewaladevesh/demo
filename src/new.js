function outerfunc(){
    function devesh() {
        function innerfunc() {
            let a = 10;
            console.log(a)
        }
        return innerfunc()
    }
    return devesh()
}

outerfunc()
