import { TOTP } from 'totp-generator';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./public/styles/web.css"

function App() {
    const [secretKey, setSecretKey] = useState('');
    const [codeName, setCodeName] = useState('');
    const [codes, setCodes] = useState([]);
    const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
    const [isSettingsModalActive, setIsSettingsModalActive] = useState(false);
    const [codeToDelete, setCodeToDelete] = useState(null);
    const [codeForSettings, setCodeForSettings] = useState(null);

    const generateOtp = (key) => {
        const { otp } = TOTP.generate(key);
        return otp;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCodes(prevCodes =>
                prevCodes.map(code => ({
                    ...code,
                    otp: generateOtp(code.secretKey),
                }))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const saveSecretKeyToCookies = () => {
        if (!secretKey || !codeName) return; // Don't save if inputs are empty
        const newCode = { name: codeName, secretKey, otp: generateOtp(secretKey) };
        const updatedCodes = [...codes, newCode];
        Cookies.set('codes', JSON.stringify(updatedCodes), { expires: 7 });
        setCodes(updatedCodes);
        setSecretKey(''); // Reset the secret key input
        setCodeName(''); // Reset the code name input
    };

    const openDeleteModal = (code) => {
        setCodeToDelete(code);
        setIsDeleteModalActive(true);
    };

    const confirmDelete = () => {
        if (codeToDelete) {
            const updatedCodes = codes.filter(code => code.name !== codeToDelete.name);
            Cookies.set('codes', JSON.stringify(updatedCodes), { expires: 7 });
            setCodes(updatedCodes);
        }
        setIsDeleteModalActive(false);
        setCodeToDelete(null);
    };

    const cancelDelete = () => {
        setIsDeleteModalActive(false);
        setCodeToDelete(null);
    };

    const openSettingsModal = (code) => {
        setCodeForSettings(code);
        setIsSettingsModalActive(true);
    };

    const closeSettingsModal = () => {
        setIsSettingsModalActive(false);
        setCodeForSettings(null);
    };

    useEffect(() => {
        const savedCodes = Cookies.get('codes');
        if (savedCodes) {
            setCodes(JSON.parse(savedCodes));
        }
    }, []);

    const [visible, setVisible] = useState(true);
    return (
        <div>
            <Navbar/>
            <div className="toast toast-error" style={{ display: visible ? 'block' : 'none' }}>
            <button className="btn btn-clear float-right" 
            onClick={() => setVisible(false)}></button>
            Fontos! Ha törli a böngészési adatokat (például a sütiket és a gyorsítótárat), a mentett kódjai is elvesznek.
            </div>
            <div className="webapp">
                <div className="input-fields">
                    <div>
                        <input
                            type="text"
                            value={codeName}
                            onChange={(e) => setCodeName(e.target.value)}
                            placeholder="fiók neve"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            value={secretKey}
                            onChange={(e) => setSecretKey(e.target.value)}
                            placeholder="azonosító"
                        />
                    </div>
                    <button className="btn btn-primary" onClick={saveSecretKeyToCookies}>
                        Fiók Hozzáadása
                    </button>
                </div>
                <div className="divider text-center" data-content="KÓDJAI"></div>
                <div>
                    {codes.length > 0 ? (
                        <ul className="card-sect">
                            {codes.map((code, index) => (
                                <li key={index}>
                                    <div className="card cardelem">
                                        <h2>{code.otp}</h2>
                                        <p className="text-small"><i class="icon icon-people"></i> {code.name}</p>
                                        <div className="buttons">
                                            <button
                                                className="btn my"
                                                onClick={() => openSettingsModal(code)}
                                            >
                                                Beállítások
                                            </button>
                                            <button
                                                className="btn btn-error"
                                                onClick={() => openDeleteModal(code)}
                                            ><i class="icon icon-delete"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div class="empty">
                          <div class="empty-icon">
                            <i class="icon icon-people icon-2x"></i>
                          </div>
                          <p class="empty-title h5">Önnek nincsenek kódjai!</p>
                          <p class="empty-subtitle">A fenti felületen adhat hozzá kódokat.</p>
                          <div class="empty-action">
                          </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Delete Modal */}
            {isDeleteModalActive && (
                <div className="modal active">
                    <a href="#close" className="modal-overlay" aria-label="Close" onClick={cancelDelete}></a>
                    <div className="modal-container">
                        <div className="modal-header">
                            <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={cancelDelete}></a>
                            <div className="modal-title h5">Törlés megerősítése</div>
                        </div>
                        <div className="modal-body">
                            <div className="content">
                                Biztosan törölni szeretné a(z) "{codeToDelete?.name}" kódot?
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-error my" onClick={confirmDelete}>Törlés</button>
                            <button className="btn btn-secondary" onClick={cancelDelete}>Mégse</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Modal */}
            {isSettingsModalActive && (
                <div className="modal active">
                    <a href="#close" className="modal-overlay" aria-label="Close" onClick={closeSettingsModal}></a>
                    <div className="modal-container">
                        <div className="modal-header">
                            <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={closeSettingsModal}></a>
                            <div className="modal-title h5">Fiók Beállításai</div>
                        </div>
                        <div className="modal-body">
                            <div className="content">
                                <p><strong>Fiók neve:</strong> {codeForSettings?.name}</p>
                                <p><strong>Azonosító:</strong> {codeForSettings?.secretKey}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={closeSettingsModal}>Bezárás</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer></Footer>
        </div>
    );
}

export default App;
