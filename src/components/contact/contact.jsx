const Contact = () => {
    return(
        <div id="Contact"  class="h-screen">
            <h2>Contact</h2>
            <div class="hidden">
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <button></button>
            </div>
            <a href="mailto:amelie.willems2@gmail.com" class="bg-gray-200 flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                send an email directly
            </a>
        </div>
    )
}

export default Contact