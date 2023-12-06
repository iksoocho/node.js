
import {createStore} from 'vuex'     //vuex의 데이터는 메모리에 올라가 있는 데이터 이기 때문에 새로고침하면 사라진다  >> vuex-persistedstate 를 사용(로컬 스토리지에 저장)
import createPersistedState from 'vuex-persistedstate'     //npm install --save vue-persistedstate

const store = createStore({
    state(){
        return {
            cart : [
                {
                    product_id : 1,
                    product_name : "아이폰 거치대",
                    category : "A"
                }
            ],
            count : 0
        }
    },
    getters : {
        cartCount : (state)=>{
            return state.cart.length;
        }
    },
    mutations : {              //동기식
        increment(state){
            state.count++;
        },
        addProduct(state, info){
            state.cart.push(info);
        }
    },
    actions : {           //비동기
        addProduct(context, info){     //context > store.js 전체  무엇이든 불러올수 있음, info > component가 넘기는 정보
            setTimeout(()=>{
                context.commit('addProduct', info)
            },1000)
        }
    },
    plugins: [
        createPersistedState({               //그냥 createPersistedstate()로만 해도되지만 데이터가 너무 많다면 아래 처럼 선별해서 로컬스토리지에 저장할수 있음 
            paths : ['cart']
        })
    ]
});

export default store;