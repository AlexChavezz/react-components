import closeButtonImage from './assets/close_black_24dp.svg';

interface ModalProps {
    visibilityState?: boolean,
    setVisibilityState: React.Dispatch<React.SetStateAction<boolean>>
    closeable: boolean,
    backgroundScreenColor?: string,
    scrollable?: boolean,
    children: React.ReactElement | React.ReactElement[]
}

export const Modal = ({
    setVisibilityState,
    closeable = true,
    backgroundScreenColor = "rgba(31, 26, 26, 0.39)",
    scrollable = false,
    children,
}: ModalProps) => {

    const handleCloseModal = () => {
        setVisibilityState(false);
    }

    return (
        <section style={{
            position: 'absolute',
            height: '100vh',
            width: '100 %',
            backgroundColor: backgroundScreenColor,
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <article style={{
                position: 'relative',
                backgroundColor: '#fff',
                borderRadius: 10,
                width: '500px',
                height: '700px',
                userSelect: 'none',
                overflow: scrollable ? "auto" : "hidden",
                padding: "40px 10px 10px 10px"
            }}>
                {
                    closeable &&
                    <img
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            height: "30px",
                            width: "30px",
                            cursor: 'pointer',
                        }}
                        src={closeButtonImage}
                        alt="close-button"
                        onClick={handleCloseModal}
                    />
                }
                {
                    children
                }
            </article>
        </section >
    );
}
