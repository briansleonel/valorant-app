import { useEffect, useState } from "react";
import AgentsCards from "../components/Cards/AgentsCards";
import { useAppDispatch, useAppSelector } from "../app/hooks-redux";
import { fetchAgents } from "../reducers/agents/fetchAgents";

const AgentsPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { status, data } = useAppSelector((state) => state.agents);

    const { language, order, displayName } = useAppSelector(
        (state) => state.filters
    );

    /*
    useEffect(() => {
        dispatch(
            fetchAgents({
                language: language || "en-US",
                isPlayableCharacter: true,
            })
        );
        console.log("First load...");
    }, []);
    */

    useEffect(() => {
        dispatch(
            fetchAgents({
                language: language || "en-US",
                isPlayableCharacter: true,
            })
        );
        console.log(`Change language to ${language}`);
    }, [language]);

    /*
    useEffect(() => {
        if (displayName !== undefined) {
            //const regexp = new RegExp(`${displayName}*`, "i");

            
            dispatch(findByDisplayNameAgent({ displayName: displayName }));
            
        }
    }, [displayName]);
    */

    return (
        <>
            {status === "loading" ? (
                <h1>Loading...</h1>
            ) : (
                <AgentsCards data={data} />
            )}
        </>
    );
};

export default AgentsPage;
