const ModalDialog = ({ ...props }) => {
    return (
        <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ModalDialog;