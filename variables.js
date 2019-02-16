/* 'let' & 'const' keywords declare variables to be block scope variables
 * hence such STRICTLY declared variables are scoped perfectly and avoids confusion.
 * 
 * 'var' keyword declare variable to be function scoped variable. Even then those cab be accessed scopes which are containing such scopes, which creates confusion and leads to tricky scenarios. Can't know real purpose of having such declared variables
 *
 * Below code tries to show only tricky scenarios with 'var' kind. Accessing
 * other kind is anyway straight forward
 */

/* conventions for variable name prefix
* g -> global, gb -> global block
* f -> function, b -> block
* l -> let kind, v -> var kind, c -> const kind
* examples: 
* gl_* is global let kind, fv_* is functon var kind, etc.
*/

// Global scope
let gl_int=10, gl_name='sammy-let', gl_true=true, gl_array=[], gl_obj={};
var gv_int=10, gv_name='sammy-var', gv_true=true, gv_array=[], gv_obj={};
const gc_int=10, gc_name='sammy-const', gc_true=true, gc_array=[], gc_obj={};

if (true){
    let gbl_int=10, gbl_name='sammy-let', gbl_true=true, gbl_array=[], gbl_obj={};
    var gbv_int=10, gbv_name='sammy-var', gbv_true=true, gbv_array=[], gbv_obj={};
    const gbc_int=10, gbc_name='sammy-const', gbc_true=true, gbc_array=[], gbc_obj={};
}
// function scope
function sample(){
    let fl_int=10, fl_name='sammy-let', fl_true=true, fl_array=[], fl_obj={};
    var fv_int=10, fv_name='sammy-var', fv_true=true, fv_array=[], fv_obj={};
    const fc_int=10, fc_name='sammy-const', fc_true=true, fc_array=[], fc_obj={};

    // block scope
    if(true){
        let bl_int=10, bl_name='sammy-let', bl_true=true, bl_array=[], bl_obj={};
        var bv_int=10, bv_name='sammy_var', bv_true=true, bv_array=[], bv_obj={};
        const bc_int=10, bc_name='sammy-const', bc_true=true, bc_array=[], bc_obj={};
    }

    // Because function-scope is containing block variables, declared 
    // like bv_* can be accessed, even though they are declared within 'if' block
    console.log(bv_int, bv_name, bv_true, bv_array, bv_obj)
    // But the same is can't with 'let' & 'const'
    //console.log(bl_int, bc_int) // Refference Error
}

function access_global_block_scoped_var(){
    // Similary, b'se global scope is containing global block, 
    // we can easily access, modify 'var' kind variables. 
    // accessing or modifying other kind leads to error
    gbv_array.push(10), gbv_obj['a'] = 10;
    console.log(gbv_int, gbv_name, gbv_true, gbv_array, gbv_obj)
}

// modify 'const' variable's values
//gc_int = 11, gc_name += 'extra', gc_true = false, // TypeError
gc_array.push(10), gc_obj['a'] = 10;
//gbc_array.push(10), gbc_obj['a'] = 10; // TypeError

sample();
access_global_block_scoped_var();
console.log(gbv_int, gbv_name, gbv_true, gbv_array, gbv_obj)
