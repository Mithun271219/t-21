function Pricelist(lists){
    if (lists.preice==0){
        return(
            <div class="card">
                <header>
                    <h6>{lists.id}</h6>
                    <h2 class='priceing'>${lists.preice}</h2>
                    <span class='pricing'>/month</span>
                </header>
                <main>
                    <section>
                        <p class="text-monospace" ><i class="fa fa-check" aria-hidden="true"></i>{lists.user}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.storage}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.publicproj}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.acess}</p>
                        <p class='text-muted'><i class="fa fa-times" aria-hidden="true"></i>{lists.privateproj}</p>
                        <p class='text-muted'><i class="fa fa-times" aria-hidden="true"></i>{lists.support}</p>
                        <p class='text-muted'><i class="fa fa-times" aria-hidden="true"></i>{lists.domain}</p>
                        <p class='text-muted'><i class="fa fa-times" aria-hidden="true"></i>{lists.status}</p>
                        <button class='btn btn-primary btn-lg btn-block'>button</button>
                    </section>
                </main> 
             </div>
        )
    }
    else if (lists.preice==9){
        return(
            <div class="card">
                <header>
                    <h6>{lists.id}</h6>
                    <h2 class='priceing'>${lists.preice}</h2>
                    <span class='pricing'>/month</span>
                </header>
                <main>
                    <section>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.user}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.storage}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.publicproj}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.acess}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.privateproj}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.support}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.domain}</p>
                        <p class='text-muted'><i class="fa fa-times" aria-hidden="true"></i>{lists.status}</p>
                        <button class='btn btn-primary btn-lg btn-block'>button</button>
                    </section>
                </main> 
             </div>
        )
    }
    else {
        return(
            <div class="card">
                <header>
                    <h6>{lists.id}</h6>
                    <h2 class='priceing'>${lists.preice}</h2>
                    <span class='pricing'>/month</span>
                </header>
                <main>
                    <section>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.user}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.storage}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.publicproj}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.acess}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.privateproj}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.support}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.domain}</p>
                        <p class="text-monospace"><i class="fa fa-check" aria-hidden="true"></i>{lists.status}</p>
                        <button class='btn btn-primary btn-lg btn-block'>button</button>
                    </section>
                </main> 
             </div>
        )
    }
    
}
export default Pricelist;

// <i class="fa fa-check" aria-hidden="true"></i>
// <i class="fa fa-times" aria-hidden="true"></i>
