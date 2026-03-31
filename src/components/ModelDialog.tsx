const ModalDialog = ({ ...props }) => {
    return (
        <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] p-6">
                {props.children}
            </div>
        </div>
    );
}

export default ModalDialog;