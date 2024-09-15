const FAQ_container = document.getElementById("FAQ-container")!;
let id = 0;


interface FaqTopic {
    title:string,
    content:string
}

const newTopic = (faq:FaqTopic):void => {
    let currentId = id;

    let topicDiv = document.createElement("div");
    topicDiv.className = "topics";
    topicDiv.id = "topic"+currentId;

    let topicTitle = document.createElement("h2");
    topicTitle.className = "titles";
    topicTitle.id = "title"+currentId;
    topicTitle.textContent = faq.title;
    topicTitle.addEventListener("click", ()=>{toggleTopic(currentId)});
    
    topicDiv.appendChild(topicTitle);
    FAQ_container.appendChild(topicDiv);

    id++;
}

const toggleTopic = (topicId:number):void => {
    let currentTopic = document.getElementById("topic"+topicId)!;
    const contentP = currentTopic.querySelector("p#content"+topicId);
    
    if(!(contentP)){
        openTopic(topicId);
    } else {
        closeTopic(topicId);
    }

}

const openTopic = (topicId:number):void => {
    let currentTopic = document.getElementById("topic"+topicId)!;
    let topicTitle = document.getElementById("title"+topicId)!.textContent;
    let topicContent = document.createElement("p");
    let contentText = getContentOfFaq(topicTitle);

    topicContent.textContent = contentText;
    topicContent.className = "contents";
    topicContent.id = "content"+topicId;
    currentTopic.appendChild(topicContent);
}

const closeTopic = (topicId:number):void => {
    let currentTopic = document.getElementById("topic"+topicId)!;
    let topicContent = document.getElementById("content"+topicId)!;

    currentTopic.removeChild(topicContent);
}


const getContentOfFaq = (title:string):string => {
    const faq =  faqs.find(faq => faq.title == title)!;
    return faq.content;
}


// predefined FAQs
const faqs:FaqTopic[] = [
    {
        title:"How do I reset my password?",
        content:"To reset your password, go to the login page and click 'Forgot Password'. Follow the instructions to create a new password."
    },
    {
        title:"How many files can I upload to the cloud?",
        content:"You can store up to 100 GB of files in the cloud. If you need more space, you can purchase an additional plan."
    },
    {
        title: "How can I cancel my subscription?",
        content: "To cancel your subscription, go to your account, navigate to the subscription settings, and select 'Cancel Subscription'."
    },
    {
        title: "How do I contact support?",
        content: "To contact support, you can email us at support@example.com or use the live chat available on our website."
    },
    {
        title: "What should I do if I encounter an error?",
        content: "If you encounter an error, please report it using the feedback form available on the help page. Our team will review and address the issue as soon as possible."
    }
];

faqs.forEach(newTopic);