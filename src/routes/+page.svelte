<script>
// @ts-nocheck

    import { animate } from "./stores";
    import { onMount } from 'svelte';

    onMount(async () => {
        // Fetch your blogs here
        // For each blog, transform the publication_date
        blogs = blogs.map(blog => ({ ...blog, publication_date: formatDate(blog.publication_date) }));
    });


    let blogs = [
        {
            "id": 1,
            "title": "Ein Ultimativer Schicksaalschlag",
            "content": "test",
            "teaser": "Ist Schicksal wirklich „ein Geschenk“, eine Last, die konvertiert zu Lebenssinn, was uns zu neuen Höhen emporhebt?",
            "public": true,
            "publication_date": "2023-12-08 10:00:00.123Z",
            "reading_time": 2,
            "views": 134,
            "likes": 7,
            "comments": [
            ]
        }
    ]

    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    const cover_img = "bg-[url(https://static.wixstatic.com/media/63b476_b09c88d6a0e84f57990bd4dad0bf7cd9~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_auto/63b476_b09c88d6a0e84f57990bd4dad0bf7cd9~mv2.png)]"

</script>

<section class="w-full overflow-auto flex pt-20 flex-col items-center h-full min-h-screen">
    <div class="w-full justify-center flex items-center flex-col h-full py-20">
        <div class="w-full px-10 md:px-0 md:w-3/5 h-full py-2">
            <div class="md:px-20 lg:px-32 py-10">
                <h1 class="text-5xl text-center items-center justify-center font-sans font-light tracking-wide py-2">
                    Willkommen
                </h1>
    
                <h2 class="text-xl text-center items-center justify-center font-sans font-regular tracking-wide py-2">
                    Durch Rückschläge wird das Leben erst lebenswert
                </h2>
    
                <p class="justify-center text-center py-2 font-extralight">
                    Weisheit ist ein tiefgehendes Verständnis, verschiedenste Zusammenhänge der Gesellschaft und des Lebens zu verstehen. Es ist aber auch die Fähigkeit, Herausforderungen zu überwinden. Der weiseste Mann, den ich jemals kennenlernen durfte, erklärte mir einst Folgendes: "Talent kann man haben und Fähigkeiten kann man schnell erlernen, aber die Weisheit, das kommt erst mit der Zeit."
                </p>
    
                <a href="/blogs" class="w-full items-center justify-center flex py-4">
                    <button class="{$animate} bg-base hover:bg-accent hover:text-black text-white text-sm py-2 px-4 hover:px-6 rounded-full">
                        Zu den Blogs
                    </button>
                </a>

            </div>

            <div class="w-full h-full py-20">
                <a href="/blogs/{blogs[0].id}" class="w-full justify-center items-center flex">
                    <div class="{$animate} flex flex-col md:flex-row w-full md:h-80  lg:h-60 rounded-none altashadow bg-secondary p-4 hover:bg-base">
                        <!-- Cover image -->
                        <div class="{cover_img} bg-cover w-full md:w-2/5 h-60 md:h-full"/>
                            
                        <!-- Content -->
                        <div class="bg-white md:w-3/5 flex flex-col p-6 md:p-4 py-10 md:py-6 text-base relative h-full">
                            <div class="text-sm flex flex-row gap-2 font-light">
                                <span>
                                    {blogs[0].publication_date}
                                </span>
                                <div>
                                    •
                                </div>
                                <span>
                                    {blogs[0].reading_time} min
                                </span>
                            </div>

                            <div class="py-2 gap-2 flex flex-col">
                                <h3 class="text-md md:text-lg xl:text-xl text-base">
                                    {blogs[0].title}
                                </h3>
                                <p class="text-sm font-light">
                                    {blogs[0].teaser}
                                </p>

                            </div>
                                
                            <div class="flex flex-row justify-between px-6 md:px-4 lg:px-6 w-full items-center absolute bottom-4 text-sm right-0">
                                <span>
                                    {blogs[0].views} views
                                </span>

                                <span class="justify-center items-center flex flex-row gap-1">
                                    {blogs[0].likes} 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" data-slot="icon" class="w-5 h-5 stroke-red-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                      </svg>
                                      
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </a>

        </div>
    </div>
    <div class="bg-base w-full flex flex-col justify-center items-center h-full py-10 text-white">
        <div class="px-10 sm:w-4/5 md:w-3/5 justify-center flex flex-col h-full">
            <h3 class="text-3xl">
                Für die Leser
            </h3>
            <p class="py-4 font-light">
                Ich lade alle Leser herzlich ein, meine kurzen oder etwas längeren Andachten zu verschiedensten Themen rund um Weisheit, Lebenserfahrung, Philosophie und vieles Weitere zu lesen. Ganz besonders lade ich Sie im Folgenden ein, Ihre Andachten mit der Community und mir zu teilen. 
               <br>
                Viel Spaß!
            </p>
        </div>
    </div>
</section>
