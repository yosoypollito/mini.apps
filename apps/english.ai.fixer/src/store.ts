import { writable } from 'svelte/store';

export type IHistory = {
  wrong: string,
  fixed: string
}

export const wrongEnglishText = writable('');
export const fixedEnglishText = writable('');

const prevEnglishTextHistory = localStorage.getItem('EnglishTextHistory') || "[]";
export const EnglishTextHistory = writable<Array<IHistory>>(JSON.parse(prevEnglishTextHistory));

EnglishTextHistory.subscribe((value) => {
  localStorage.setItem("EnglishTextHistory", JSON.stringify(value));
})

export const ShowModal = writable(false);
export const ModalEnglishTexts = writable<IHistory>({
  wrong: '',
  fixed: ''
});

export const viewHistory = ({
  wrong,
  fixed,
}: {
  wrong: string;
  fixed: string;
}) => {
  ModalEnglishTexts.set({
    wrong,
    fixed
  });
  openModal()
};

export const applyHistory = ({
  wrong,
  fixed,
}: {
  wrong: string;
  fixed: string;
}) => {
  // Reset value to through update
  fixedEnglishText.set("")
  // Set fixed value
  fixedEnglishText.set(fixed);
  closeModal()
};

export const closeModal = () => {
  ShowModal.set(false);
}

export const openModal = () => {
  ShowModal.set(true);
}