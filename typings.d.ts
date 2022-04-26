export interface Article{
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
        bio:{
            '0':{
                children:{
                    '0':{
                        text: string;
                    };
                };
            };
        };
    };
    longtitle: string;
    categories:{
        '0':{
            title:string;
        } ;
    };      
    
    mainImage: {
        asset: {
            url: string;
        };
    };
    publishedAt: string;
    slug: {
        current: string;
    };
    body: [object];
}