<script lang="ts">
  import { getMatchByFullname } from '@src/api';
  async function submitEvent() {
    console.log('aaa');
    const fullname = (document.querySelector('input') as HTMLInputElement)
      .value;
    if (!fullname) return;
    if (!fullname.includes('#')) {
      alert('플레이어 이름 + #KR1 형식으로 입력해주세요');
      return;
    }
    try {
      const match = await getMatchByFullname(fullname);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message === 'User Not Found') {
          alert('유저를 찾을 수 없습니다.');
        } else if (e.message === 'Match Not Found') {
          alert('진행중인 게임이 없습니다.');
        } else {
          alert('알 수 없는 오류가 발생했습니다.');
        }
      }
    }
  }
</script>

<div class="container text-center">
  <form id="form" on:submit|preventDefault={submitEvent}>
    <input
      type="text"
      class="form-control"
      placeholder="플레이어 이름 + #KR1"
    />
  </form>

  <h3>진행중인 게임만 검색이 됩니다</h3>
</div>

<style>
  .form-control {
    margin-top: 20%;
    height: 3rem;
    padding: 1rem;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }
</style>
