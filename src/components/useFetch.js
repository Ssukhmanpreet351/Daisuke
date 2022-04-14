import { useState, useEffect } from 'react';

const useFetch = (url) => { 
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else {
                    console.log(err.message);
                    setError(err.message);
                    setIsPending(false);
                }
            })

            return () => {
                console.log ('cleanup');
                abortCont.abort();
            }

    }, [url]);

    return { data, isPending, error }
}

const useFetchAll = (urls) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        const pendingRequests = [];

        urls.forEach(url => {
            const pendingRequest = fetch(url, { signal: abortCont.signal }).then((res) => {
                if(!res.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            });
            pendingRequests.push(pendingRequest);
        });

        const allData = Promise.all(pendingRequests);
        allData.then((data) => {
            setData(data.flat());
            setIsPending(false);
            setError(null);
        }).catch((err)=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        })
  
        return () => {
            console.log ('cleanup');
            abortCont.abort();
        }

    }, [urls]);

    return { data, isPending, error }
}

export {useFetch, useFetchAll};