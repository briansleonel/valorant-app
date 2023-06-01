import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IAgentApi } from "../../types/agents";
import { IState } from "../../types/api";
import { fetchAgents } from "./fetchAgents";

interface IAgentsAction {
    data: Array<IAgentApi>;
}

const initialState: IState<IAgentApi> = {
    data: [],
    error: null,
    status: "idle",
};

const agentsSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {
        setAgents: (state, action: PayloadAction<IAgentsAction>) => {
            state.data = action.payload.data;
        },
    },
    extraReducers: (builder) => {
        // When we send a request,
        // `fetchAgents.pending` is being fired:
        builder.addCase(fetchAgents.pending, (state) => {
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.status = "loading";
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchAgents.fulfilled, (state, { payload }) => {
            // We add all the new todos into the state
            // and change `status` back to `idle`:
            state.data = payload.data;

            state.status = "idle";
        });

        // When a server responses with an error:
        builder.addCase(fetchAgents.rejected, (state, { payload }) => {
            // We show the error message
            // and change `status` back to `idle` again.
            if (payload) state.error = payload.message;
            state.status = "idle";
        });
    },
});

/*
interface LoadAgents {
    dataStatic: Array<IAgentApi>;
}

interface DisplayNameAction {
    displayName: string;
}

interface OrderAction {
    order: string;
}

interface AgentsState extends LoadAgents {
    amount: number;
    data: Array<IAgentApi>;
}

const initialState: AgentsState = {
    dataStatic: [],
    data: [],
    amount: 0,
};

export const agentsSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {
        loadAgents: (state, action: PayloadAction<LoadAgents>) => {
            console.log(action);
            state.data = state.dataStatic = action.payload.dataStatic;
            state.amount = state.data.length;
        },
        findByDisplayNameAgent: (
            state,
            action: PayloadAction<DisplayNameAction>
        ) => {
            state.data =
                action.payload.displayName !== ""
                    ? state.dataStatic.filter((val) => {
                          if (
                              val.displayName
                                  .toLocaleLowerCase()
                                  .includes(
                                      action.payload.displayName.toLocaleLowerCase()
                                  )
                          )
                              return val;
                      })
                    : state.dataStatic;
            state.amount = state.data.length;
        },
        orderAgents: (state, action: PayloadAction<OrderAction>) => {
            state.data = state.data.sort(function (a, b) {
                if (a.displayName > b.displayName) {
                    return 1;
                }
                if (a.displayName < b.displayName) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
        },
    },
});

*/

// export selectors
//export const selectStatusDataAgents = (state: RootState) => state.agents.status;

// export the actions
export const { setAgents } = agentsSlice.actions;

export default agentsSlice.reducer;
