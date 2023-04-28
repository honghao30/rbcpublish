<template>
  <div class="join">
    <PageTitle pagetitle="기업담당자 회원가입" />  
    <div class="join-step__wrap">
        <ol>
            <li class="step-end">
                <div class="join-step__inner">
                    <span>약관동의</span>
                </div>
            </li>
            <li class="step-ing">
                <div class="join-step__inner">
                    <span>기업정보 입력</span>
                </div>
            </li>
            <li>
                <div class="join-step__inner">
                    <span>회원정보 입력</span>
                </div>                                
            </li> 
            <li>
                <div class="join-step__inner">
                    <span>가입완료</span>
                </div>                                
            </li>                          
        </ol>
    </div>
    <PageTitleH3 titleh3="기업정보 입력" noticeinfo="필수 입력값" />
    <form  ref="form" :model="form">
        <div class="table__wrap">
          <table class="table table-bodyonly form-table">
            <colgroup>
              <col width="200px">
              <col /> 
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span class="form-item__label required">사업자등록번호</span></th>
                <td>
                    <div class="form-item__content" v-if="showall">
                        <div class="form-item-row">
                            <div class="input-item">   
                                <input type="text" class="input" placeholder="‘-’없이 10자리 숫자만 입력해주세요." v-model="form.certificate">
                                <ButtonCmp
                                    type="btn-default-line"
                                    @click="checkCertificate"                                    
                                >
                                사업자등록증 인증
                                </ButtonCmp>                               
                            </div>
                        </div>
                        <p class="form-item__error" v-if="certificateErrorMsg">사업자등록번호를 입력해주세요.</p> 
                        <p class="guide-text">※ 사업자등록번호 인증 후 회원가입을 진행 할 수 있습니다.</p>
                    </div>
                    <div class="form-item__content" v-else>
                        <div class="form-item-row">
                            <div class="input-item">   
                                <input type="text" class="input" :value="certificatetemp" disabled>                            
                            </div>
                        </div>                       
                        <p class="guide-text black">사업자등록번호 인증이 완료되었습니다.</p>
                    </div>                    
                </td>
              </tr>
              <tr>
                <th scope="row"><span class="form-item__label">사업자등록증</span></th>
                <td>
                  <div class="form-item__content">
                    <div class="form-item-row">
                      <div class="input-item">
                        <input type="text" class="input" :value="filesName">
                        <input type="file" id="fileUp" class="input" @change="onFileChanged">
                        <label for="fileUp" class="btn btn-default-line">파일찾기</label>
                      </div>                      
                    </div>                    
                    <p class="guide-text black">&middot; 파일형식: JPG, PNG, PDF, TIFF(최대 5MB)</p>
                    <p class="guide-text"> ※ 사업자등록증이 없는 경우 사업자등록증명 또는 고유번호증을 등록해주세요. </p>
                    <p class="guide-text"> ※ 비영리법인/국가기관인 경우 고유번호증을 등록해주세요. </p>
                  </div> 
                </td>
              </tr>
              <tr>
                <th scope="row"><span class="form-item__label required">법인명(단체명)</span></th>
                <td>
                  <div class="form-item__content">
                    <div class="form-item-row">
                      <div class="input-item">   
                        <input type="text" class="input" placeholder="사업자등록증에 등록된 법인명(단체명)을 입력해주세요." v-model="form.companyname">
                      </div>
                    </div>  
                    <p class="form-item__error" v-if="companynameErrorMsg">법인명(단체명)을 입력해주세요.</p>                   
                  </div>
                </td>
              </tr>              
              <tr>
                <th scope="row"><span class="form-item__label required">업태</span></th>
                <td>
                  <div class="form-item__content">
                    <div class="form-item-row">
                      <div class="input-item">   
                        <input type="text" class="input" placeholder="사업자등록증에 등록된 첫번째 업태명을 입력해주세요."  v-model="form.biztype">
                      </div>
                    </div>
                    <p class="form-item__error" v-if="biztypeErrorMsg">사업자등록증에 등록된 첫번째 업태명을 입력해주세요.</p>                   
                    <p class="guide-text">※ 비영리법인/국가기관인 경우 ‘기업/단체’로 입력해주세요.</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><span class="form-item__label required">종목</span></th>
                <td>
                  <div class="form-item__content">
                    <div class="form-item-row">
                      <div class="input-item">   
                        <input type="text" class="input" placeholder="사업자등록증에 등록된 첫번째 종목명을 입력해주세요."   v-model="form.bizevent">
                      </div>
                    </div>
                    <p class="form-item__error" v-if="bizeventErrorMsg">사업자등록증에 등록된 첫번째 종목명을 입력해주세요.</p>                   
                    <p class="guide-text">※ 비영리법인/국가기관인 경우 ‘비영리, 공공/행정, 정치/사회, 복지, 종교, 모임, 기관/단체일반’ 중에서 해당하는 항목을 입력해주세요.</p>
                  </div>
                </td>
              </tr>              
              <tr>
                <th scope="row"><span class="form-item__label required">기업주소</span></th>
                <td>
                  <div class="form-item__content">
                    <div class="form-item-row">
                      <div class="input-item post">
                        <input type="text" class="input" v-model="form.postcode">
                        <ButtonCmp
                            type="btn-default-line"
                            @click="findPost"                           
                        >
                          우편번호
                        </ButtonCmp> 
                      </div>
                    </div> 
                    <div class="form-item-row">
                      <div class="input-item address">
                        <input type="text" class="input" v-model="form.addr1">  <input type="text" class="input" v-model="form.addr2">
                      </div>
                    </div>
                  </div> 
                </td>
              </tr>                      
            </tbody>
          </table>
        </div> 
      <div class="button__wrap">
        <ButtonCmp
          type="btn-blue-line"          
        >이전</ButtonCmp>
        <ButtonCmp
          type="btn-blue"     
          @click="onSubmit"     
        >다음</ButtonCmp>        
      </div>
  </form>
        <ModalView          
          v-if="isModalViewed" @closeModal="isModalViewed = false"
        >
            <CertificateMsg @closeModal="isModalViewed = false" />
        </ModalView>
  </div>
</template>

<script>
import PageTitle from '@/components/common/PageTitle.vue';
import PageTitleH3 from '@/components/common/PageTitleH3.vue';
import ButtonCmp from '@/components/common/ButtonCmp.vue'
import ModalView from '@/components/common/ModalView.vue';
import CertificateMsg from '@/views/publish/join/CertificateMsg.vue';
  export default {
    components: {
      PageTitle,
      ButtonCmp,
      PageTitleH3,
      ModalView,
      CertificateMsg 
    },
    data() {
      return {
        form: {
          certificate: '',
          certificateFile: '',
          companyname: '',
          biztype: '',
          bizevent: '',
          postcode: '',
          addr1: '',
          addr2: ''
        },   
        certificateErrorMsg: false,
        companynameErrorMsg: false,
        biztypeErrorMsg: false,
        bizeventErrorMsg: false,
        postcodeErrorMsg: false,
        showall: true,
        files: '',   
        filesName: '',
        isModalViewed: false,
        certificatetemp: '123456789'
      }
    },
    methods: {
      onSubmit () {
        if (this.form.certificate === '') {
          this.certificateErrorMsg = true;
          return
        }
        if (this.form.biztype === '') {          
          this.biztypeErrorMsg = true;
          return
        }   
        if (this.form.bizeventErrorMsg === '') {          
          this.bizeventErrorMsg = true;
          return
        } 
        if (this.form.postcode === '') {          
          this.postcodeErrorMsg = true;
          return
        }
        if (this.form.addr2 === '') {          
          this.postcodeErrorMsg = true;
          return
        }        
      },
      checkCertificate () {
        if (this.form.certificate === '') {
          this.certificateErrorMsg = true;
          return
        }        
        this.showall = false,
        this.isModalViewed = true;
        //document.body.classList.add('modal-open')
      },
      closeModal () {
        this.isModalViewed = false;
        //document.body.classList.remove('modal-open')
      },
      onFileChanged (e) {
        const files = e.target.files;
        this.files = files;
        const filesName = files[0].name;
        this.filesName = filesName;
        console.log(files,filesName)
      },
      findPost () {
        alert('우편번호 잦기')
      }

    }      
  }
</script>
