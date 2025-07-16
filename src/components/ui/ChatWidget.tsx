'use client';
import { useState } from 'react';
import InputText from './InputText';
import ButtonPrimary from './ButtonPrimary';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (!text.trim()) return;
    setMessages((m) => [...m, text.trim()]);
    setText('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 font-[\'Inter\',sans-serif]">
      {open && (
        <div className="bg-white shadow-lg border rounded-lg w-72 flex flex-col h-80 mb-2">
          <div className="flex-1 overflow-y-auto p-2 space-y-1 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className="p-2 bg-gray-100 rounded-md">
                {msg}
              </div>
            ))}
          </div>
          <div className="p-2 flex gap-2 border-t">
            <InputText
              className="flex-1"
              placeholder="Escribe tu mensaje"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <ButtonPrimary type="button" onClick={handleSend} className="shrink-0 px-3">
              Enviar
            </ButtonPrimary>
          </div>
        </div>
      )}
      <ButtonPrimary type="button" onClick={() => setOpen(!open)} className="rounded-full px-3 py-2">
        {open ? 'Cerrar' : 'Chat'}
      </ButtonPrimary>
    </div>
  );
}

/** Example Usage:
 *
 * <ChatWidget />
 */
