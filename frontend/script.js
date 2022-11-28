document.getElementById("usernameGeneratedCode").innerHTML = create_random_string(4);

    
    function create_random_string(random_string) {
    let codeUsername = "";
    let randomUsername = "";
    let charactersArray = "ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890abcdefghijklmnopqrstuwxyz_."
    let randomizedUsernameArray =  ["NightWalker", "InternationalBoat", "HistoricalWeight", "PursuitFlame", "SuperLaFemme", "SwordInevitable", 
"EmbarassedBunch", "AstroChica", "DarkStar", "FannyAm"]

    for(let i = 0; i < random_string; i++){
            codeUsername += charactersArray.charAt(Math.floor(Math.random() * charactersArray.length));
            randomIndex = Math.floor(Math.random() * randomizedUsernameArray.length);

            randomUsername = randomizedUsernameArray[randomIndex];
        }
        return randomUsername+codeUsername;
    }

    function copyButtonFn() {
        let copyButton = document.getElementById("copy-btn");

        copyButton.addEventListener('click', async (event) => {
            let content = document.getElementById("usernameGeneratedCode").textContent;
            await navigator.clipboard.writeText(content);
            let copied = await navigator.clipboard.readText();
            console.log(copied);
        })
    }
