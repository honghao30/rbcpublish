<template>
  <div class="tmep__wrap">
      <div class="wsg-guide-content">
        <div class="wsg-note__wrap--gray-box">
          <ul class="wsg_desc">
            <li>Form 요소에 대한 기본 정의 내용 입니다.</li>
          </ul>
        </div>
      </div>
      <TitleH3 titleh3="Select" />
      <div class="wsg-guide-content">
        <div class="select"> 
          <select name="" id="selectValue">
            <option value="1">선택 1</option>
            <option value="2">선택 2</option>
            <option value="3">선택 3</option>
          </select>
        </div>
      </div>    
      <TitleH3 titleh3="Checkbox" />
      <div class="wsg-guide-content">
        <span class="checkbox">
          <input type="checkbox" id="check" value="form.check"/>
          <label for="check"><span class="checkbox__text">옵션1</span></label>
        </span>
      </div>   
      <TitleH3 titleh3="Radiobox" />
      <div class="wsg-guide-content">
        <span class="radiobox">
          <input type="radio" name="radio" id="radio1" />
          <label for="radio1"><span class="radiobox__text">옵션1</span></label>
        </span>
        <span class="radiobox">
          <input type="radio" name="radio" id="radio2" />
          <label for="radio2"><span class="radiobox__text">옵션2</span></label>
        </span>
        <span class="radiobox">
          <input type="radio" name="radio" id="radio3" />
          <label for="radio3"><span class="radiobox__text">옵션3</span></label>
        </span>
      </div> 
      <TitleH3 titleh3="Datepicker" />
      <div class="wsg-guide-content">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="날짜를 선택하세요">
        </el-date-picker>
      </div> 
      <TitleH3 titleh3="Form List" />
      <div class="wsg-guide-content">
        <div class="form-list">
          <div class="form-item">
            <span class="form-item__label">아이디</span>
            <div class="form-item__content">
              <input type="text" class="input"/>
            </div> 
            <p class="form-item__error">아이디를 입력해주세요.</p>  
          </div>
          <div class="form-item">
            <span class="form-item__label">휴대폰번호</span>
            <div class="form-item__content">
              <input type="text" class="input">
              <button class="btn__certi">인증번호 요청</button>
            </div> 
            <p class="form-item__error">휴대폰번호를 입력해주세요.</p>  
          </div>
        </div>
      </div>
      <TitleH3 titleh3="Form List(Table 형)" />
      <div class="wsg-guide-content">
        <div class="table__wrap">
          <table class="table table-bodyonly form-table">
            <colgroup>
              <col width="200px">
              <col /> 
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span class="form-item__label required">업태</span></th>
                <td>
                  <div class="form-item-row">
                    <div class="input-item">   
                      <input type="text" class="input">
                    </div>
                    <p class="guide-text">※ 비영리법인/국가기관인 경우 ‘기업/단체’로 입력해주세요.</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">주소</th>
                <td>
                  <div class="form-item">
                    <div class="form-item-row">
                      <div class="input-item">
                        <input type="text" class="input">
                        <button>우편번호</button>
                      </div>
                    </div> 
                    <div class="form-item-row">
                      <div class="input-item">
                        <input type="text" class="input">
                      </div>
                      <div class="input-item">
                        <input type="text" class="input">
                      </div>
                    </div>
                    
                  </div> 

                </td>
              </tr>                      
            </tbody>
          </table>
        </div>     
      </div>       
  </div>
</template>

<script>
import TitleH3 from '../cmp/TitleH3.vue'

export default {
  data() {
    return {
      form: {
        selectValue:'',
        date: '',
        check: '',
        radio: 1,
        radioGroup: 3
      }
    }
  },
  components: {
    TitleH3
  }

}
</script>

<style lang="scss">
.text {
    font-size:16px;
    max-width: 50%;
    margin:20px 0;
  }
  .long-text {
    font-size:16px;
    max-width: 40%;
    margin:20px 0;
  }
</style>