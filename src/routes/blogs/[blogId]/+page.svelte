<script>

    export let data
</script>


<section class="w-full overflow-auto flex pt-20 flex-col items-center h-full min-h-screen">
    <div class="w-full justify-center flex items-center flex-col h-full py-10 pt-20">
        <div class="w-full px-10 md:px-0 md:w-3/5 h-full py-2">
            <div class="md:px-20 lg:px-32 py-10">
                <h1 class="text-5xl text-center items-center justify-center font-sans font-light tracking-wide py-10">
                    {data?.blog.title}
                </h1>

                <div class="">
                    {@html data?.blog.content}
                </div>

            </div>
        </div>
    </div>
</section>
