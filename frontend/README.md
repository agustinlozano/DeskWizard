## docs: estado de la app
### Store
Este store esta consituido por tres
reducers distintos, los cuales manejan
el estado de:
  - Usuario
  - Tickets
  - Notas

La funcion `configureStore` proviene de
un import a `@reduxjs/toolkit`.
```JS
  export const store = configureStore({
    reducer: {
      auth: authReducer,
      tickets: ticketReducer,
      notes: noteReducer,
    },
  })
```

#### authReducer
Es un _slice reducer_ creado a partir de
  - estado inicial
  - una serie de acciones
a traves de la funcion `createSlice` de
Redux Toolkit.

```JS
  const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  }
```

user proviene de localStorage.
```JS
const user = JSON.parse(localStorage.getItem("user"))
```

Este estado en particular trabaja con 
tres acciones que son asincronas.
  - auth/register
  - auth/login
  - auth/logout

Cada una de estas acciones son convertidas
en una promesa mediante una funcion del 
Redux Toolkit llamada `createAsyncThunk`.
Esta promesa especial resuelve de manera 
asicrona un _thunkAction_ que en definitiva
es la accion deseada.
```JS
  const syncAction =
    createAsyncThunk("redux/action", callback())
```

Por ultimo se crea el _authReducer_ con
la funcion de `createSlice`.
```JS
  createSlice({
    "name",
    initalState,
    functionObject,
    extraReducers
  })
```

Un _slice reducer_ en Redux como su nombre
lo indica, es una 'rebanada de reducer' que
genera cradores de accines y tipos de acciones.

Vemos que en el objeto pasado a la funcion
tiene un miembo llamado `extraReducers`, esta
funcion forma parte de un concepto clave en
Redux.
 
Cada 'rebanada de reducer' tiene su propia
'rebanada de estado' y por eso pueden responder
de manera independiente al mismo tipo de accion.

`extraReducers` permite que `createSlice` 
responda a otros tipos de acciones además 
de los tipos que ha generado.

```JS
  createSlice({
    name: "auth",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.message = ""
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(register.pending, (state) => {
            state.isLoading = true
          })
          .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
          })
          .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
          })
          // ...
          // ...
    },
  })
```
En este ultimo ejemplo vemos como agregando
casos podemos derivar a nuevas acciones que 
modifican el estado de la aplicacion a partir 
de una accion asyncrona llamda _register_.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
