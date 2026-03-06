"use client";

import { useState } from "react"
import { notFound } from "next/navigation";
import "./ContactModal.page.css"
import { AiOutlineClose } from 'react-icons/ai'
import Button from "../Button";

interface ContactData {
    isOpen: boolean
    onClose: () => void
}

function ContactModal({ isOpen, onClose }: ContactData) {
    const [form, setForm] = useState({
        title: "",
        type: "",
        contact: "",
        message: "",
    });

    const contactTypes = [
        "포트폴리오 관련", 
        "프로젝트 관련", 
        "구인/구직 관련", 
        "기타"
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("문의 내용:", form);

        const confirmed = window.confirm("문의 내용을 전송하시겠습니까?");

        if (!confirmed) return;

        const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_BASE_URL is not set');

        const url = `${BASE_URL}/api/contact`

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                console.log(`${response.status} ${response.statusText}`);
                notFound()
            }

            const data = await response.json();
            alert(data.message);
            
            setForm({ title: "", type: "", contact: "", message: "" });
            onClose();
        } catch (error) {
            console.log(error);
            alert("문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Contact</h2>
                    <button
                        className="modal-close"
                        onClick={onClose}
                        aria-label="닫기"
                    >
                        <AiOutlineClose />
                    </button>
                </div>
                <hr />
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <label htmlFor="title" className="form-label">제목</label>
                        <div className="form-field">
                            <input type="text" name="title" value={form.title} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <span className="form-label">문의 종류</span>
                        <div className="form-field">
                            <div className="radio-group">
                                {contactTypes.map((type) => (
                                    <label key={type} className="radio-item">
                                        <input
                                            type="radio"
                                            name="type"
                                            value={type}
                                            checked={form.type === type}
                                            onChange={handleChange}
                                            required
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="contact" className="form-label">답변받을 곳</label>
                        <div className="form-field">
                            <input type="text" name="contact" value={form.contact} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="message" className="form-label">내용</label>
                        <div className="form-field">
                            <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-actions">
                        <Button
                            type={"submit"}
                            className={"button"}
                        >
                            보내기
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactModal