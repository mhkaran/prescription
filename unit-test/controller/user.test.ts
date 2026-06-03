import {expect} from "chai";
//import moch from "mocha";
import {user_controller} from "../../src/controller";
import {IUser} from "../../src/interface";
import sinon from "sinon";
import {validate} from "../../src/util"



describe('test user controller', async()=>{

    beforeEach(()=>{

    })

    after(()=>{

    })

    it('user valiation failed, ', async()=>{

        sinon.mock(validate).expects("user").returns('last name is mandatory!');

        const userData:IUser= {email:'test@gmail.com',firstName:'test',lastName:''};

        let result = await user_controller.create(userData);

        expect(result).to.deep.equal({statusCode:400,data:{code:1, message:'last name is mandatory!'}});
    })
})