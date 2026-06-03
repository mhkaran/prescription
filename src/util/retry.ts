
const retry = (fn:Function,retryCount:number) => new Promise((resolve, reject)=>{
    const retryDelay = 100;
    fn().then(resolve).catch((err)=>{
        if (retryCount > 0) {
            setTimeout(()=>{
                retry(fn,retryCount-1).then(resolve).catch(reject);
            },retryDelay);
        } else {
            reject(err);
        }
    })
});

export default retry;